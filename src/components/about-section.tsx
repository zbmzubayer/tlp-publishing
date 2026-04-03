import { about } from "./site-content";

export function AboutSection() {
  return (
    <section id="about" className="py-10">
      <div className="container grid gap-8 sm:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1560249951-67f7a21fbd98?auto=format&fit=crop&w=1171&q=80"
          alt="About Us"
          className="h-full object-cover"
        />

        <article className="p-6 md:p-8">
          <p className="font-heading sm:text-xl">
            {about.introLabel}
            <strong>-------</strong>
          </p>
          <h2 className="mt-4 font-extrabold font-heading text-4xl text-[#223645] md:text-6xl">
            {about.heading}
          </h2>

          <div className="mt-8 space-y-5">
            {about.values.map((value) => (
              <div key={value.heading} className="space-y-2 text-xl">
                <h2 className="font-bold font-heading text-[#223645]">{value.heading}</h2>
                <p className="font-body text-[#444444]">{value.body}</p>
              </div>
            ))}
          </div>

          <a
            href="https://link.tlppublishing.com/widget/bookings/tlppublishing"
            className="mt-10 inline-flex rounded-full bg-[#1549B2] px-8 py-3 font-bold font-heading text-sm text-white uppercase tracking-wide transition hover:bg-[#103b96]"
          >
            Book an appointment
          </a>
        </article>
      </div>
    </section>
  );
}

/* 
<section
      id="about"
      className="border-black border-y-2 bg-[url('https://images.unsplash.com/photo-1560249951-67f7a21fbd98?auto=format&fit=crop&w=1171&q=80')] bg-center bg-cover"
    >
      <div className="mx-auto grid w-full max-w-292.5 gap-8 px-6 py-16 md:grid-cols-[1fr_1.35fr] md:py-20">
        <div className="min-h-55 rounded-md bg-white/10 backdrop-blur-sm" />

        <article className="rounded-md bg-white/92 p-6 shadow-lg backdrop-blur-[1px] md:p-8">
          <p className="font-body font-bold text-[#1549B2] text-sm uppercase tracking-[0.2em]">
            {about.introLabel}
          </p>
          <h2 className="mt-4 font-extrabold font-heading text-4xl text-[#223645] md:text-6xl">
            {about.heading}
          </h2>

          <div className="mt-8 space-y-5">
            {about.values.map((value) => (
              <p
                key={value}
                className="font-body text-[#444444] text-base leading-7"
              >
                {value}
              </p>
            ))}
          </div>

          <a
            href="https://tlppublishing.com/bookingpage"
            className="mt-10 inline-flex rounded-full bg-[#1549B2] px-8 py-3 font-bold font-heading text-sm text-white uppercase tracking-wide transition hover:bg-[#103b96]"
          >
            Book an appointment
          </a>
        </article>
      </div>
</section>

*/
