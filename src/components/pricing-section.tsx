import { PricingCard } from "./pricing-card";
import { pricingFootnotes, pricingPlans } from "./site-content";

export function PricingSection() {
  const firstRow = pricingPlans.slice(0, 2);
  const secondRow = pricingPlans.slice(2, 4);

  return (
    <section id="pricing" className="bg-[#188BF6]">
      <div className="mx-auto w-full max-w-292.5 px-6 py-16 md:py-20">
        <div className="text-center">
          <p className="font-body font-bold text-[#C9D8E0] text-xs uppercase tracking-[0.3em]">
            PRICING
          </p>
          <h2 className="mt-3 font-extrabold font-heading text-5xl text-white md:text-7xl">
            Choose Your Plan
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {firstRow.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondRow.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-12 space-y-6 rounded-md bg-[#1549B2] p-7 text-white">
          {pricingFootnotes.map((item) => (
            <p key={item} className="font-body text-base leading-7 md:text-lg">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
