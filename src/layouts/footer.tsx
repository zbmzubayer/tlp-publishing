import { brand, footer } from "@/components/site-content";

export function Footer() {
  return (
    <footer className="border-y-2 border-black bg-[#1549B2] text-white">
      <div className="mx-auto w-full max-w-292.5 px-6 py-10 text-center">
        {/* biome-ignore lint/performance/noImgElement: Remote CDN brand asset must stay hotlinked for parity. */}
        <img
          src={brand.logoSrc}
          alt="TLP Publishing"
          className="mx-auto h-20 w-auto"
          loading="lazy"
        />
        <p className="font-body mt-5 text-sm leading-6 text-white/80">
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
