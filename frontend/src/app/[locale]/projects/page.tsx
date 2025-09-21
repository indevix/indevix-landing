import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavigationLinksMobile } from "@components/header/navigation-links-mobile";
import { Contacts } from "@components/header/contacts";
import Projects from "@components/projects/projects";
import { navigationLinks as links } from "@config/navigation-links";
import LocaleSwitcherSelect from "@components/header/locale-switcher-select";

export interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function ProjectsPage({ params }: PageProps) {
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  const t = useTranslations("Navigation");

  return (
    <main>
      <header className="w-full max-w-[2000px] h-25 items-center mx-auto flex justify-between py-5">
        <Link href={`/${locale}`} aria-label="Go to homepage" className="block">
          <Image
            src="/logo.png"
            alt="Indevix Logo"
            width={200}
            height={200}
            className="h-[30px] md:h-[45px] w-auto my-auto mx-[20px]"
            priority
          />
        </Link>
        <nav className="hidden xl:flex justify-center items-center gap-5 xl:gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="text-foreground text-xs md:text-sm relative group"
            >
              {t(`${link.name}`)}
              <span
                className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 group-hover:w-full h-[2px] bg-current transition-all duration-300 origin-center"
                aria-hidden="true"
              />
            </Link>
          ))}
          <LocaleSwitcherSelect label="Сменить язык" />
        </nav>
        <div className="flex items-center">
          <Contacts />
          <NavigationLinksMobile landing={false} />
        </div>
      </header>
      <Projects all={true} />
    </main>
  );
}
