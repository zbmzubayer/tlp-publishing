import { contact } from "./site-content";
import { SocialLinks } from "./social-links";

const linkBaseClass =
  "font-body inline-flex w-full items-center justify-center rounded-2xl border border-white/35 bg-[#1549B2] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#103b96]";

export function ContactCtaSection() {
  return (
    <section id="contact" className="border-y-2 border-black bg-[#1549B2]">
      <div className="mx-auto w-full max-w-292.5 px-6 py-12 md:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          <a href={contact.phoneHref} className={linkBaseClass}>
            {contact.phoneLabel}
          </a>
          <a href={contact.emailHref} className={linkBaseClass}>
            {contact.emailLabel}
          </a>
          <a
            href={contact.websiteHref}
            className={linkBaseClass}
            target="_blank"
            rel="noreferrer noopener"
          >
            {contact.websiteLabel}
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
