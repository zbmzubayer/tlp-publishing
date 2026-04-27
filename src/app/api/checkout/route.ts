import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

// export async function POST(req: Request) {
//   const { amount } = await req.json();

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: amount,
//     currency: "usd",
//     automatic_payment_methods: { enabled: true },
//   });

//   return NextResponse.json({
//     clientSecret: paymentIntent.client_secret,
//   });
// }

export async function POST(req: Request) {
  const { priceId, userId, userEmail } = await req.json();
  console.log(priceId, userId, userEmail);

  const session = await stripe.checkout.sessions.create({
    mode: "subscription", // ← subscription mode
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: userEmail, // pre-fill email
    metadata: {
      userId, // ← your own user tracking
    },
    subscription_data: {
      metadata: {
        userId, // also attach to subscription
        priceId,
      },
    },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
  });

  console.log("Created Stripe Checkout session:", session);

  return NextResponse.json({ url: session.url });
}
