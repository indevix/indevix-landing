import { PageParams } from "@/types/page-params.types";
import { Header } from "@components/header/header";
import Hero from "@components/hero/hero";
import Projects from "@components/projects/projects";
import Reviews from "@components/reviews/reviews";
import Services from "@components/services/services";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function HomePage({ params }: PageParams) {
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  return (
    <main>
      <Header locale={locale} />
      <Hero />
      <Projects limit={3} />
      <Reviews />
      <Services />
    </main>
  );
}
