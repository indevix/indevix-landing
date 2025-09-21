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
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<LayoutProps, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "LocaleLayout",
  });

  return {
    title: "Indevix",
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html className="min-h-full" lang={locale}>
      <body
        className={`${montserrat.className} ${tektur.variable} flex min-h-full flex-col bg-background`}
      >
        <div id="modal-root" />

        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
