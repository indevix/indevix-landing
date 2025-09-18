import { Header } from "@/components/header/header";
import Hero from "@/components/hero/hero";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function HomePage({ params }: PageProps) {
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  return (
    <main>
      <Header locale={locale} />
      <Hero />
    </main>
  );
}
