import { useTranslations } from "next-intl";
import { Directions } from "./directions";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <article
      id="hero"
      className="flex flex-col mx-auto px-[15px] relative bg-cover bg-center bg-no-repeat max-w-[2000px]"
      style={{
        backgroundImage: "url(/bg.png)",
      }}
    >
      <div className="relative z-10 container mx-auto">
        <h1 className="text-[30px] md:text-6xl font-extrabold mt-25 md:pt-50">
          {t("title_1")} <br />
          {t("title_2")}
        </h1>
        <Directions />
      </div>
    </article>
  );
}
