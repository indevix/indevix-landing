import { Locale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { NavigationLinksMobile } from "@components/header/navigation-links-mobile";
import { Contacts } from "@components/header/contacts";
import Projects from "@components/projects/projects";
import { navigationLinks as links } from "@config/navigation-links";
import LocaleSwitcherSelect from "@components/header/locale-switcher-select";
import { PageParams } from "@/types/page-params.types";
import { Metadata } from "next";
import Footer from "@components/footer/footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: "Our Portfolio - Web Development Projects | Indevix",
    ru: "Наше портфолио - проекты веб-разработки | Indevix",
    tr: "Portföyümüz - Web Geliştirme Projeleri | Indevix",
    ky: "Биздин портфолио - веб иштеп чыгуу долбоорлору | Indevix",
  };

  const descriptions = {
    en: "Explore our successful web development projects: landing pages, e-commerce, CRM systems. See how we help businesses grow with technology.",
    ru: "Изучите наши успешные проекты: лендинги, интернет-магазины, CRM-системы. Узнайте, как мы помогаем бизнесу расти.",
    tr: "Başarılı web geliştirme projelerimizi keşfedin: landing sayfaları, e-ticaret, CRM sistemleri.",
    ky: "Биздин ийгиликтүү веб иштеп чыгуу долбоорлорун изилдеңиз: лендингдер, онлайн дүкөндөр, CRM системалар.",
  };

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        en: "https://indevix.com/en/projects",
        ru: "https://indevix.com/ru/projects",
        tr: "https://indevix.com/tr/projects",
        ky: "https://indevix.com/ky/projects",
        "x-default": "https://indevix.com/en/projects",
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      url: `https://indevix.com/${locale}/projects`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
    },
  };
}

export default async function ProjectsPage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("Navigation");

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
      <section className="container mx-auto px-[15px] py-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          {t("all projects")}
        </h1>
        <Projects all={true} />
      </section>

      <Footer />
    </main>
  );
}
