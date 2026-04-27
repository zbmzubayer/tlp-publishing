"use client";

import { useState } from "react";
import type Stripe from "stripe";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

interface PricingCardProps {
  priceId: string;
  unit_amount: number;
  product: Stripe.Product;
  interval: string;
}

export function PricingCard({ price }: { price: PricingCardProps }) {
  const session = authClient.useSession();
  const user = session.data?.user;

  const [loadingId, setLoadingId] = useState<string | null>(null);
  const product = price.product as Stripe.Product;
  const [descriptionHeading, ...features] = product.description?.split("*") || [];

  const handleSubscribe = async (priceId: string) => {
    setLoadingId(priceId);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        priceId,
        userId: user?.id,
        userEmail: user?.email,
      }),
    });

    const { url } = await res.json();
    window.location.href = url; // redirect to Stripe Checkout
  };

  return (
    <article className="rounded-md border border-[#565A7C] bg-[#222639] p-7 text-white shadow-md md:p-8">
      <h3 className="font-body font-bold text-[#C9D8E0] text-sm uppercase tracking-[0.15em]">
        {product.name}
      </h3>
      <p className="mt-4 font-body text-[#C9D8E0] text-sm tabular-nums leading-7 md:text-base">
        {price.unit_amount
          ? `$${(price.unit_amount / 100).toFixed(2)}/${price.interval}`
          : "Contact us for pricing"}
      </p>
      <div className="mt-4 flex flex-col font-body text-[#C9D8E0] text-sm leading-7 md:text-base">
        <p className="mb-3 font-bold">{descriptionHeading}</p>
        {features.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <Button
        className="mt-7 inline-flex w-full items-center justify-center rounded bg-[#0038FF] px-5 py-4 text-center font-body font-bold text-sm text-white uppercase tracking-[0.14em] transition hover:bg-[#0a2fbc]"
        onClick={() => handleSubscribe(price.priceId)}
        disabled={loadingId === price.priceId}
      >
        Choose Plan
      </Button>
    </article>
  );
}
