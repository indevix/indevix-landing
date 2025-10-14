import { PageParams } from "@/types/page-params.types";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Header from "@components/header/header";
import Hero from "@components/hero/hero";
import Projects from "@components/projects/projects";
import Services from "@components/services/services";
// import Team from "@components/team/team";
import Slogan from "@components/slogan/slogan";
import Request from "@components/request/request";
import Footer from "@components/footer/footer";
import { StructuredData } from "@config/structured-data";

export default function HomePage({ params }: PageParams) {
  const { locale } = use(params);

  setRequestLocale(locale as Locale);

  return (
    <>
      <StructuredData locale={locale} />
      <main>
        <Header locale={locale} />
        <Hero />
        <Projects limit={3} />
        <Services />
        {/*<Team />*/}
        <Slogan />
        <Request />
        <Footer />
      </main>
    </>
  );
}
