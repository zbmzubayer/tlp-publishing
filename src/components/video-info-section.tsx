import { media, pricingIntro } from "./site-content";

export function VideoInfoSection() {
  return (
    <section className="relative isolate overflow-hidden border-y-2 border-black bg-[#188BF6]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${media.videoSectionBackground})` }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-292.5 gap-10 px-6 py-14 md:grid-cols-[1.05fr_1fr] md:py-20">
        <article className="rounded-md bg-[#188BF6]/90 p-1 text-white">
          <h2 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">
            {pricingIntro.heading}
          </h2>

          <div className="font-body mt-6 space-y-4 text-base leading-7 md:text-lg">
            {pricingIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-6 space-y-2 font-heading text-lg font-bold md:text-xl">
            {pricingIntro.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <div className="overflow-hidden rounded-md border border-white/30 bg-black/20">
          <video
            controls
            preload="metadata"
            className="h-full w-full"
            poster={media.videoPoster}
          >
            <source src={media.videoSrc} type="video/mp4" />
            <track
              kind="captions"
              src="/captions/tlp-video.vtt"
              srcLang="en"
              label="English captions"
              default
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
