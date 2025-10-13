import { notFound } from "next/navigation";
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { ReactNode } from "react";
import { StructuredData } from "@config/structured-data";

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

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${BASE_URL}/${l}`]),
  ) as Record<string, string>;

  const titles = {
    en: "Your Partner in Engineering the Digital World",
    ru: "Ваш партнёр в создании цифрового мира",
    tr: "Dijital Dünyayı İnşa Etmede Ortağınız",
    ky: "Санарип дүйнөнү куруудагы өнөктөшүңүз",
  };

  const descriptions = {
    en: "We build custom web and AI solutions for businesses. From automation to CRM and software — we turn complex processes into efficient systems.",
    ru: "Мы создаём индивидуальные веб-и AI-решения для бизнеса. От автоматизации до CRM и корпоративного ПО — превращаем сложные процессы в эффективные системы.",
    tr: "İşletmeler için özel web ve yapay zeka çözümleri geliştiriyoruz. Otomasyondan CRM ve yazılıma kadar karmaşık süreçleri verimli sistemlere dönüştürüyoruz.",
    ky: "Биз бизнес үчүн веб жана AI чечимдерин жекелештирип түзөбүз. Автоматташтыруудан тартып CRM жана программалык камсыздоого чейин — татаал процесстерди натыйжалуу системаларга айландырабыз.",
  };

  const keywords = {
    en: [
      "web development company",
      "custom software development",
      "AI automation for business",
      "business process automation",
      "web app development for startups",
      "AI integration for websites",
      "digital transformation partner",
      "CRM and ERP software development",
      "AI chatbot solutions",
      "business automation services",
    ],
    ru: [
      "веб разработка",
      "разработка программного обеспечения",
      "автоматизация бизнеса",
      "AI решения для компаний",
      "внедрение искусственного интеллекта",
      "разработка CRM и ERP систем",
      "автоматизация бизнес-процессов",
      "разработка сайтов под ключ",
      "цифровая трансформация",
      "чат-боты и AI автоматизация",
    ],
    tr: [
      "web geliştirme",
      "özel yazılım geliştirme",
      "işletmeler için yapay zeka otomasyonu",
      "iş süreçleri otomasyonu",
      "startup web uygulama geliştirme",
      "web siteleri için AI entegrasyonu",
      "dijital dönüşüm ortağı",
      "CRM ve ERP yazılım geliştirme",
      "AI sohbet botu çözümleri",
      "iş otomasyon hizmetleri",
    ],
    ky: [
      "веб иштеп чыгуу",
      "жекелештирилген программалык камсыздоо",
      "бизнес үчүн AI автоматташтыруу",
      "бизнес процесстерди автоматташтыруу",
      "стартаптар үчүн веб тиркемелер",
      "вебсайттарга AI интеграциясы",
      "санарип трансформация өнөктөшү",
      "CRM жана ERP системаларын иштеп чыгуу",
      "AI чат-бот чечимдери",
      "бизнес автоматташтыруу кызматтары",
    ],
  };

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      template: "Indevix | %s",
      default: titles[locale as keyof typeof titles],
    },
    description: descriptions[locale as keyof typeof descriptions],
    keywords: keywords[locale as keyof typeof keywords],
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
          alt: "Indevix OG",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      images: ["/og-image.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <>
      <StructuredData locale={locale} />
      <NextIntlClientProvider locale={locale as Locale}>
        {children}
      </NextIntlClientProvider>
    </>
  );
}
