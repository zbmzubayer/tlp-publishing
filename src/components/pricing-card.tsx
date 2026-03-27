import type { PricingPlan } from "./site-content";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article className="rounded-md border border-[#565A7C] bg-[#222639] p-7 text-white shadow-md md:p-8">
      <h3 className="font-body text-sm font-bold uppercase tracking-[0.15em] text-[#C9D8E0]">
        {plan.name}
      </h3>
      <p className="font-body mt-4 text-sm leading-7 text-[#C9D8E0] md:text-base">
        {plan.subtitle}
      </p>

      <div className="mt-6 space-y-2">
        <p className="font-heading text-4xl font-extrabold leading-tight md:text-5xl">
          {plan.freePeriod}
        </p>
        <p className="font-heading text-4xl font-extrabold leading-tight md:text-5xl">
          {plan.monthlyPrice}
        </p>
      </div>

      <ul className="font-body mt-6 space-y-3 text-base leading-7 text-[#C9D8E0]">
        {plan.features.map((feature) => (
          <li key={feature}>- {feature}</li>
        ))}
      </ul>

      <a
        href={plan.ctaHref}
        className="font-body mt-7 inline-flex w-full items-center justify-center rounded bg-[#0038FF] px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#0a2fbc]"
      >
        {plan.ctaLabel}
      </a>

      <p className="font-body mt-4 text-center text-sm text-[#8893A8]">
        No contracts - cancel anytime
      </p>
    </article>
  );
}
