import { companyStory, media } from "./site-content";

export function CompanyStorySection() {
  return (
    <section className="relative border-y-2 border-black bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${media.companyBackground})` }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-292.5 gap-8 px-6 py-16 md:grid-cols-[1.25fr_1fr] md:py-20">
        <article className="rounded-md bg-white/90 p-5 shadow-lg backdrop-blur-[1px]">
          <div className="mb-4 border-b border-[#1549B2]/30 pb-3">
            <p className="font-heading text-2xl font-extrabold text-[#223645]">
              {companyStory.badge}
            </p>
          </div>

          <div className="space-y-6">
            {companyStory.sections.map((section) => (
              <div key={section.heading} className="space-y-2">
                <h2 className="font-heading text-lg font-extrabold text-[#1549B2]">
                  {section.heading}
                </h2>
                <p className="font-body text-sm leading-7 text-[#223645] md:text-base">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <a
            href="https://tlppublishing.com/bookingpage"
            className="mt-8 inline-flex rounded-full bg-[#1549B2] px-8 py-3 font-heading text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#103b96]"
          >
            Book an appointment
          </a>
        </article>

        <div className="flex items-center justify-center rounded-md bg-[#07142D]/70 p-4">
          {/* biome-ignore lint/performance/noImgElement: Source design uses external media URL and parity requires direct asset usage. */}
          <img
            src={media.companyImage}
            alt="TLP Publishing team"
            className="h-auto w-full max-w-105"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
