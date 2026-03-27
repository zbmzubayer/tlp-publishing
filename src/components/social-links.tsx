import { socialLinks } from "./site-content";

type SocialLinksProps = {
  className?: string;
  itemClassName?: string;
};

export function SocialLinks({
  className = "",
  itemClassName = "",
}: SocialLinksProps) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
      {socialLinks.map((item) => (
        <li key={item.label}>
          <a
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-xs font-semibold text-white transition hover:border-white hover:bg-white/10 ${itemClassName}`.trim()}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={item.label}
            title={item.label}
          >
            {item.shortLabel}
          </a>
        </li>
      ))}
    </ul>
  );
}
