import { StripeCheckoutForm } from "@/components/payment/checkout-form";
import { Card, CardContent } from "@/components/ui/card";
import { stripe } from "@/lib/stripe";

export default async function PaymentPage() {
  const products = await stripe.prices.list({ active: true, expand: ["data.product"] });
  console.log("Products:", products);

  return (
    <div className="container min-h-screen py-10">
      <div className="mx-auto max-w-xl">
        <Card>
          <CardContent>
            <StripeCheckoutForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
