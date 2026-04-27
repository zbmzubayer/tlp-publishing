import { type NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { PAYMENT_STATUS, SUBSCRIPTION_STATUS } from "@/enums/enum";
import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "customer.created": {
      const c = event.data.object as Stripe.Customer;
      await prisma.profile.update({
        where: { id: c.metadata.userId },
        data: { stripeCustomerId: c.id },
      });
      break;
    }
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      // Payment confirmed — provision access
      console.log("User ID:", session.metadata?.userId);
      console.log("Subscription ID:", session.subscription);
      break;
    }

    case "customer.subscription.created":
    case "customer.subscription.updated": {
      const subObject = event.data.object as Stripe.Subscription;

      const sub = await stripe.subscriptions.retrieve(subObject.id, {
        expand: ["latest_invoice"],
      });

      const invoice = sub.latest_invoice as Stripe.Invoice;
      const item = sub.items.data[0];
      // const customer = await prisma.customer.findUnique({
      //   where: { stripeCustomerId: sub.customer as string },
      // });
      const plan = await prisma.plan.findUnique({
        where: { stripePriceId: item.price.id },
      });

      await prisma.subscription.upsert({
        where: { stripeSubscriptionId: sub.id },
        create: {
          stripeSubscriptionId: sub.id,
          userId: sub.metadata.userId,
          stripeCustomerId: sub.customer as string,
          planId: plan!.id,
          status: sub.status,
          currentPeriodStart: new Date(invoice.period_start * 1000),
          currentPeriodEnd: new Date(invoice.period_end * 1000),
          cancelAtPeriodEnd: sub.cancel_at_period_end,
          trialStart: sub.trial_start ? new Date(sub.trial_start * 1000) : null,
          trialEnd: sub.trial_end ? new Date(sub.trial_end * 1000) : null,
        },
        update: {
          status: sub.status,
          currentPeriodStart: new Date(invoice.period_start * 1000),
          currentPeriodEnd: new Date(invoice.period_end * 1000),
          cancelAtPeriodEnd: sub.cancel_at_period_end,
          canceledAt: sub.canceled_at ? new Date(sub.canceled_at * 1000) : null,
        },
      });
      break;
    }

    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice;
      const stripeCustomerId = invoice.customer as string;
      const profile = await prisma.profile.findUnique({ where: { stripeCustomerId } });
      const subscription = await prisma.subscription.findUnique({
        where: {
          stripeSubscriptionId: invoice.parent?.subscription_details?.subscription as string,
        },
      });
      await prisma.payment.create({
        data: {
          userId: profile!.userId,
          stripeCustomerId,
          subscriptionId: subscription?.id,
          stripeInvoiceId: invoice.id,
          stripePaymentIntentId: invoice.payments?.data[0].id,
          amount: invoice.amount_paid,
          currency: invoice.currency,
          status: PAYMENT_STATUS.succeeded,
          receiptUrl: invoice.hosted_invoice_url,
        },
      });
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const stripeCustomerId = invoice.customer as string;
      const profile = await prisma.profile.findUnique({ where: { stripeCustomerId } });
      await prisma.payment.create({
        data: {
          userId: profile!.userId,
          stripeCustomerId,
          stripeInvoiceId: invoice.id,
          amount: invoice.amount_due,
          currency: invoice.currency,
          status: PAYMENT_STATUS.failed,
        },
      });
      break;
    }
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      await prisma.subscription.update({
        where: { stripeSubscriptionId: sub.id },
        data: {
          status: SUBSCRIPTION_STATUS.canceled,
          canceledAt: new Date(),
        },
      });
      break;
    }
    default: {
      await prisma.stripeWebhookEvent.upsert({
        where: { stripeEventId: event.id },
        create: {
          stripeEventId: event.id,
          type: event.type,
          payload: event as any,
        },
        update: {
          processedAt: new Date(),
        },
      });
    }
  }

  return NextResponse.json({ received: true });
}
