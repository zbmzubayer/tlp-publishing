import { companyStory, media } from "./site-content";

export function CompanyStorySection() {
  return (
    <section className="bg-[#1649B3] text-white">
      <div className="container py-16 md:py-20">
        <article>
          <div className="mb-4 flex items-center gap-5 border-[#1549B2]/30 border-b pb-3">
            {/** biome-ignore lint/performance/noImgElement: <explanation> */}
            <img src={media.companyImage} alt="Company" />
            <p className="font-bold font-heading text-2xl">{companyStory.badge}</p>
          </div>

          <div className="space-y-6">
            {companyStory.sections.map((section) => (
              <div key={section.heading} className="space-y-2">
                <h2 className="font-heading font-medium text-lg">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="font-body text-sm leading-7 md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <a
            href="https://link.tlppublishing.com/widget/bookings/tlppublishing"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-bold font-heading text-[#1649B3] text-sm uppercase tracking-wide transition hover:bg-gray-200"
          >
            Book an appointment
          </a>
        </article>
      </div>
    </section>
  );
}
