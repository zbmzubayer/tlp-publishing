import { brand, contact, footer } from "@/components/site-content";
import { SocialLinks } from "@/components/social-links";

const linkBaseClass =
  "font-body inline-flex w-full items-center justify-center rounded-2xl border border-white/35 bg-[#1549B2] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#103b96]";

export function Footer() {
  return (
    <footer className="bg-[#1549B2] text-white">
      <div className="container py-10 text-center">
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
        {/* biome-ignore lint/performance/noImgElement: Remote CDN brand asset must stay hotlinked for parity. */}
        <img
          src={brand.logoSrc}
          alt="TLP Publishing"
          className="mx-auto h-20 w-auto"
          loading="lazy"
        />
        <p className="mt-5 font-body text-sm text-white/80">
          {footer.legal}{" "}
          <a
            href={footer.privacyHref}
            target="_blank"
            rel="noreferrer noopener"
            className="font-semibold text-white underline underline-offset-4"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
