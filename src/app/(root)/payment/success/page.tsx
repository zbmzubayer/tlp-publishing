import Link from "next/link";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { session_id } = await searchParams;
  // No session_id means someone visited the URL directly
  if (!session_id) {
    return <p>Invalid access.</p>;
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["subscription", "customer"],
  });

  const customer = session.customer as Stripe.Customer;
  const sub = session.subscription as Stripe.Subscription;
  const planName = sub.items.data[0].price.nickname ?? "your plan";

  return (
    <div className="min-h-[70vh] bg-linear-to-b from-emerald-50 via-white to-white">
      <div className="mx-auto flex h-full max-w-2xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full rounded-2xl border border-emerald-100 bg-white p-8 shadow-emerald-100/50 shadow-xl sm:p-10">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            ✓
          </div>

          <h1 className="font-bold text-3xl text-gray-900 tracking-tight">Payment successful</h1>
          <p className="mt-3 text-base text-gray-600 leading-7">
            Hi <span className="font-medium text-gray-900">{customer.email ?? "there"}</span>, you
            are now subscribed to{" "}
            <strong className="font-semibold text-emerald-700">{planName}</strong>.
          </p>

          <div className="mt-6 rounded-lg bg-gray-50 p-4 ring-1 ring-gray-200 ring-inset">
            <p className="text-gray-500 text-sm">Subscription ID</p>
            <p className="mt-1 break-all font-mono text-gray-800 text-sm">{sub.id}</p>
          </div>

          <div className="mt-8">
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-2.5 font-semibold text-sm text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
