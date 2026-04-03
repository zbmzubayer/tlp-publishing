import { media, pricingIntro } from "./site-content";

export function VideoInfoSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#188BF6]">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${media.videoSectionBackground})` }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full gap-10 px-6 py-14 md:grid-cols-2 md:items-center md:py-20">
        <article className="rounded-md p-1 text-white">
          <h2 className="font-heading font-semibold text-4xl leading-tight md:text-5xl">
            {pricingIntro.heading}
          </h2>

          <div className="mt-6 space-y-4 font-body text-base leading-7 md:text-lg">
            {pricingIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-6 space-y-2 font-bold font-heading text-lg md:text-xl">
            {pricingIntro.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <div className="overflow-hidden rounded-md border border-white/30 bg-black/20">
          <video
            autoPlay
            controls
            muted
            preload="metadata"
            className="size-full"
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
