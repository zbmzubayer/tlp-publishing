import Link from "next/link";

export default function PaymentCancelPage() {
  return (
    <div className="container">
      <h1>Payment cancelled</h1>
      <p>You have not been charged. You can go back and try again anytime.</p>
      <Link href="/#pricing">Back to Pricing</Link>
    </div>
  );
}
