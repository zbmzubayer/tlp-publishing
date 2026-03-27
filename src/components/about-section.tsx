import { about } from "./site-content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-y-2 border-black bg-[url('https://images.unsplash.com/photo-1560249951-67f7a21fbd98?auto=format&fit=crop&w=1171&q=80')] bg-cover bg-center"
    >
      <div className="mx-auto grid w-full max-w-292.5 gap-8 px-6 py-16 md:grid-cols-[1fr_1.35fr] md:py-20">
        <div className="min-h-55 rounded-md bg-white/10 backdrop-blur-sm" />

        <article className="rounded-md bg-white/92 p-6 shadow-lg backdrop-blur-[1px] md:p-8">
          <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-[#1549B2]">
            {about.introLabel}
          </p>
          <h2 className="font-heading mt-4 text-4xl font-extrabold text-[#223645] md:text-6xl">
            {about.heading}
          </h2>

          <div className="mt-8 space-y-5">
            {about.values.map((value) => (
              <p
                key={value}
                className="font-body text-base leading-7 text-[#444444]"
              >
                {value}
              </p>
            ))}
          </div>

          <a
            href="https://tlppublishing.com/bookingpage"
            className="mt-10 inline-flex rounded-full bg-[#1549B2] px-8 py-3 font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#103b96]"
          >
            Book an appointment
          </a>
        </article>
      </div>
    </section>
  );
}
