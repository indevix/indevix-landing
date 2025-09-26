import { notFound } from "next/navigation";
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Montserrat, Tektur } from "next/font/google";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { ReactNode } from "react";
import { StructuredData } from "@/config/structured-data";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });
const tektur = Tektur({
  subsets: ["latin", "cyrillic"],
  variable: "--font-tektur",
});

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const BASE_URL = "https://indevix.com";

export async function generateMetadata({
  params,
}: Omit<LayoutProps, "children">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // const t = await getTranslations({
  //   locale: locale as Locale,
  //   namespace: "LocaleLayout",
  // });

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${BASE_URL}/${l}`])
  ) as Record<string, string>;

  const titles = {
    en: "Indevix - IT Services & Web Development Company",
    ru: "Indevix - IT услуги и веб-разработка",
    tr: "Indevix - IT Hizmetleri ve Web Geliştirme",
    ky: "Indevix - IT кызматтары жана веб иштеп чыгуу",
  };

  const descriptions = {
    en: "Boost your business with tailored IT solutions. Web development, automation, custom software, and 24/7 support. Trusted by 50+ companies.",
    ru: "Развивайте бизнес с индивидуальными IT-решениями. Веб-разработка, автоматизация, ПО под ключ и поддержка 24/7.",
    tr: "İşletmenizi özel IT çözümleriyle büyütün. Web geliştirme, otomasyon, özel yazılım ve 7/24 destek.",
    ky: "Ишкердиктинди өзгөчө IT чечимдери менен өнүктүрүңүз. Веб иштеп чыгуу, автоматизация жана 24/7 колдоо.",
  };

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      template: "%s | Indevix",
      default: titles[locale as keyof typeof titles],
    },
    description: descriptions[locale as keyof typeof descriptions],
    keywords: [
      locale === "en"
        ? "web development, IT services, software development, business automation, CRM"
        : locale === "ru"
        ? "веб разработка, IT услуги, разработка ПО, автоматизация бизнеса, CRM"
        : locale === "tr"
        ? "web geliştirme, IT hizmetleri, yazılım geliştirme, iş otomasyonu, CRM"
        : "веб иштеп чыгуу, IT кызматтары, программалык камсыздоо, ишкердиктин автоматизациясы, CRM",
    ].join(", "),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...languages,
        "x-default": "/en",
      },
    },
    openGraph: {
      url: `/${locale}`,
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      siteName: "Indevix",
      locale,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Indevix - IT Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
      yandexBot: { index: true, follow: true },
    },
    verification: {
      google: "YOUR_DATA",
      yandex: ["YOUR_DATA"],
      other: {
        "msvalidate.01": ["YOUR_DATA"],
        "facebook-domain-verification": ["YOUR_DATA"],
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html className="min-h-full" lang={locale}>
      <head>
        <StructuredData locale={locale} />
      </head>
      <body
        className={`${montserrat.className} ${tektur.variable} flex min-h-full flex-col bg-background`}
      >
        <div id="modal-root" />
        <NextIntlClientProvider locale={locale as Locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
