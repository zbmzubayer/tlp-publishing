import { PricingCard } from "./pricing-card";
import { pricingFootnotes, pricingPlans } from "./site-content";

export function PricingSection() {
  const firstRow = pricingPlans.slice(0, 2);
  const secondRow = pricingPlans.slice(2, 4);

  return (
    <section id="pricing" className="border-y-2 border-black bg-[#188BF6]">
      <div className="mx-auto w-full max-w-292.5 px-6 py-16 md:py-20">
        <div className="text-center">
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#C9D8E0]">
            PRICING
          </p>
          <h2 className="font-heading mt-3 text-5xl font-extrabold text-white md:text-7xl">
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

        <div className="mt-10 rounded-md bg-[#1549B2] p-8 text-center text-white">
          <h3 className="font-heading text-3xl font-extrabold md:text-4xl">
            Not sure where to start?
          </h3>
          <p className="font-body mx-auto mt-4 max-w-2xl text-base leading-7 md:text-lg">
            Schedule a quick 15-30 minute call to discuss your business needs,
            and we will match you with the perfect plan.
          </p>
          <a
            href="https://tlppublishing.com/bookingpage"
            className="font-heading mt-7 inline-flex rounded-full border-2 border-[#E93D3D] bg-[#E93D3D] px-8 py-3 text-base font-bold text-white transition hover:bg-[#cf3030]"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
