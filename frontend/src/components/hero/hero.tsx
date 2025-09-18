import { useTranslations } from "next-intl";
import { Directions } from "./directions";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="container flex flex-col mx-auto px-[15px]">
      <h1 className="text-[40px] md:text-6xl font-extrabold pt-50">
        {t("title_1")} <br />
        {t("title_2")}
      </h1>
      <Directions />
    </section>
  );
}
