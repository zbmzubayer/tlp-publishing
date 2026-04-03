import { media } from "./site-content";

export function HeroSection() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-[#07142D]">
      <div
        className="absolute inset-0 size-full bg-center bg-cover opacity-50"
        style={{ backgroundImage: `url(${media.heroBackground})` }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-292.5 px-6 py-28 md:py-44">
        <p className="font-body font-medium text-3xl text-white md:text-4xl">
          Welcome to TLP Publishing
        </p>
        <h1 className="mt-8 font-bold font-heading text-6xl text-white leading-[0.95] md:text-7xl">
          <span className="block">WE HELP GROW</span>
          <span className="block">YOUR BUSINESS</span>
        </h1>
        <a
          href="https://link.tlppublishing.com/widget/bookings/tlppublishing"
          className="hover:-translate-y-px mt-14 inline-flex rounded-full border-2 border-transparent bg-[#1549B2] px-8 py-4 font-bold font-heading text-base text-white transition hover:bg-[#0f3e9d]"
        >
          Book an appointment
        </a>
      </div>
    </section>
  );
}
