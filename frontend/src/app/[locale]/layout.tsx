import { notFound } from "next/navigation";
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Montserrat, Tektur } from "next/font/google";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { ReactNode } from "react";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });
const tektur = Tektur({
  subsets: ["latin", "cyrillic"],
  variable: "--font-tektur",
});

type LayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const BASE_URL = "https://indevix.com";

export async function generateMetadata({
  params,
}: Omit<LayoutProps, "children">) {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "LocaleLayout",
  });

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${BASE_URL}/${l}`])
  ) as Record<string, string>;

  return {
    metadataBase: new URL(BASE_URL),
    title: "Indevix",
    description: t("description"),
    alternates: {
      canonical: `/${locale}`, // self-canonical
      languages: {
        ...languages,
        "x-default": "/en",
      },
    },
    openGraph: {
      url: `/${locale}`,
      title: "Indevix",
      description: t("description"),
      siteName: "Indevix",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Indevix",
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html className="min-h-full" lang={locale}>
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
