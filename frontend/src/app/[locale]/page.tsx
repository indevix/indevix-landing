import { Header } from "@/components/header/header";
import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: PageProps) {
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  const t = useTranslations("HomePage");

  return (
    <main>
      <Header />
      <h1>{t("title")}</h1>
    </main>
  );
}
