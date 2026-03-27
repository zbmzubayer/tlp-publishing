import { brand, navLinks } from "@/components/site-content";
import { SocialLinks } from "@/components/social-links";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#07142D] text-white">
      <div className="mx-auto flex w-full max-w-292.5 items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-3"
          aria-label={brand.name}
        >
          {/* biome-ignore lint/performance/noImgElement: Remote CDN brand asset must stay hotlinked for parity. */}
          <img
            src={brand.logoSrc}
            alt="Brand logo"
            className="size-12"
            loading="eager"
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-heading text-base font-semibold text-white transition hover:text-[#9AE6B4]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex">
          <SocialLinks />
        </div>

        <details className="group ml-auto md:hidden">
          <summary className="font-body cursor-pointer list-none rounded border border-white/30 px-3 py-2 text-sm font-semibold">
            Menu
          </summary>
          <div className="absolute right-6 mt-2 w-65 rounded-md border border-white/20 bg-[#07142D] p-4 shadow-xl">
            <nav aria-label="Mobile Primary">
              <ul className="space-y-3">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-heading block text-base font-semibold text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 border-t border-white/20 pt-4">
              <SocialLinks />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
