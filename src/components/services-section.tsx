import { serviceItems } from "./site-content";

export function ServicesSection() {
  return (
    <section id="services" className="border-y-2 border-black bg-[#F7F7F7]">
      <div className="mx-auto w-full max-w-292.5 px-6 py-14 md:py-20">
        <div className="text-center">
          <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-[#1549B2]">
            What we do
          </p>
          <h2 className="font-heading mt-4 text-5xl font-extrabold text-[#223645] md:text-7xl">
            Our Services
          </h2>
        </div>

        <article className="mx-auto mt-10 max-w-4xl rounded-md border border-[#d5dbe2] bg-white p-8 shadow-md md:p-10">
          <ul className="space-y-4">
            {serviceItems.map((item) => (
              <li
                key={item}
                className="font-heading text-xl font-bold leading-snug text-[#444444] md:text-2xl"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
