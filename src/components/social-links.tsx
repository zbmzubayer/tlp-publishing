import { socialLinks } from "./site-content";

export function SocialLinks({ className }: React.ComponentProps<"ul">) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
      {socialLinks.map((item) => (
        <li key={item.label}>
          <a
            className={`inline-flex h-9 w-9 items-center justify-center `.trim()}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={item.label}
            title={item.label}
          >
            <img src={item.image} alt={item.label} />
          </a>
        </li>
      ))}
    </ul>
  );
}
