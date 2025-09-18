import { useTranslations } from "next-intl";
import { navigationLinks as links } from "@config/navigation-links";
import Link from "next/link";

export function NavigationLinks() {
  const t = useTranslations("Navigation");

  return (
    <nav className="hidden lg:flex justify-center items-center gap-10">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-foreground text-xs md:text-sm relative overflow-hidden group"
        >
          {t(`${link.name}`)}
          <span
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 group-hover:w-full h-[2px] bg-current transition-all duration-300 origin-center"
            aria-hidden="true"
          />
        </Link>
      ))}
    </nav>
  );
}

export function NavigationLinksMobile() {
  const t = useTranslations("Navigation");

  return (
    <nav className="flex lg:hidden flex-col justify-center items-center gap-5">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-foreground text-sm relative overflow-hidden group"
        >
          {t(`${link.name}`)}
          <span
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 group-hover:w-full h-[2px] bg-current transition-all duration-300 origin-center"
            aria-hidden="true"
          />
        </Link>
      ))}
    </nav>
  );
}
