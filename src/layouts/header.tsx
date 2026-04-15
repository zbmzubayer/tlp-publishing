import { headers } from "next/headers";
import Link from "next/link";
import { UserAvatarDropdown } from "@/components/auth/user-avatar-dropdown";
import { brand, navLinks } from "@/components/site-content";
import { SocialLinks } from "@/components/social-links";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";

export async function Header() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center bg-[#07142D] text-white">
      <div className="container flex w-full items-center justify-between gap-6">
        <Link href="/" className="inline-flex items-center gap-3" aria-label={brand.name}>
          {/* biome-ignore lint/performance/noImgElement: Remote CDN brand asset must stay hotlinked for parity. */}
          <img src={brand.logoSrc} alt="TLP logo" className="size-12" loading="eager" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="font-heading font-medium text-base transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {user ? (
            <UserAvatarDropdown user={user} />
          ) : (
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              Login
            </Link>
          )}
        </nav>

        <div className="hidden md:flex">
          <SocialLinks />
        </div>

        <details className="group ml-auto md:hidden">
          <summary className="cursor-pointer list-none rounded border border-white/30 px-3 py-2 font-body font-semibold text-sm">
            Menu
          </summary>
          <div className="absolute right-6 mt-2 w-65 rounded-md border border-white/20 bg-[#07142D] p-4 shadow-xl">
            <nav aria-label="Mobile Primary">
              <ul className="space-y-3">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block font-heading font-semibold text-base text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 border-white/20 border-t pt-4">
              <SocialLinks />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
