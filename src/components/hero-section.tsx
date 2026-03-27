import { media } from "./site-content";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-y-2 border-black bg-[#07142D]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${media.heroBackground})` }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-292.5 px-6 py-28 md:py-44">
        <p className="font-body text-3xl font-bold text-white md:text-4xl">
          Welcome to TLP Publishing
        </p>
        <h1 className="font-heading mt-8 text-6xl font-extrabold leading-[0.95] text-white md:text-8xl">
          <span className="block">WE HELP GROW</span>
          <span className="block">YOUR BUSINESS</span>
        </h1>
        <a
          href="https://tlppublishing.com/bookingpage"
          className="mt-14 inline-flex rounded-full border-2 border-transparent bg-[#1549B2] px-8 py-4 font-heading text-base font-bold text-white transition hover:-translate-y-px hover:bg-[#0f3e9d]"
        >
          Book an appointment
        </a>
      </div>
    </section>
  );
}
