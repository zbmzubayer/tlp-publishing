import { serviceItems } from "./site-content";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#F7F7F7] py-14 md:py-20">
      <div className="container">
        <div className="text-center font-heading">
          <p className="font-heading text-xl">
            <strong>-------</strong> What we do <strong>-------</strong>
          </p>
          <h2 className="mt-4 font-bold font-heading text-5xl text-[#223645] md:text-6xl">
            Our Services
          </h2>
        </div>

        <article className="mx-auto mt-10 max-w-4xl border border-[#d5dbe2] bg-white p-8 shadow-md md:p-10">
          <div className="space-y-4">
            {serviceItems.map((item) => (
              <div key={item.title}>
                <h2 className="font-bold font-heading text-[#444444] leading-snug">
                  {item.title}
                </h2>
                {item.description && (
                  <p className="text-lg">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
