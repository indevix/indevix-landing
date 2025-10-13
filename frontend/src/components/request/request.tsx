import { useTranslations } from "next-intl";
import { Button } from "@ui/button";
import Image from "next/image";
import { contactsMeta } from "@config/contacts-meta";

export default function Request() {
  const t = useTranslations("Request");
  const c = useTranslations("Contact");

  return (
    <article
      id="request"
      className="container mx-auto px-[15px] py-20 grid grid-cols-1 place-items-center"
    >
      <div className="px-5 py-10 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-card rounded-[40px]">
        <div className="w-full flex flex-col gap-10">
          <div className="w-full flex flex-col gap-[10px]">
            <p className="font-tektur text-xs md:text-sm text-foreground/70">
              {t("subtitle")}
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold">
              {t("title")}
            </h2>
          </div>
          <p className="text-[15px] md:text-[17px] font-extralight">
            {t("description")}
          </p>
          <div className="flex flex-col xl:flex-row gap-4 sm:gap-5 text-background">
            <Button
              asChild
              className="hover:text-[#25d366] bg-foreground py-4 px-8 text-base md:text-lg font-medium rounded-full transition-all duration-200 ease-in-out hover:scale-105"
              variant="outline"
            >
              <a
                href={contactsMeta.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c("whatsapp.title")}
              </a>
            </Button>

            <Button
              asChild
              className="hover:text-[#1c93e3] bg-foreground py-4 px-8 text-base md:text-lg font-medium rounded-full transition-all duration-200 ease-in-out hover:scale-105"
              variant="outline"
            >
              <a
                href={contactsMeta.telegram.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c("telegram.title")}
              </a>
            </Button>
          </div>
        </div>

        <div className="flex sm:justify-center">
          <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] 2xl:w-[350px] 2xl:h-[350px]">
            <Image
              src="/team/timur.jpg"
              alt="Игорь Костромин"
              fill
              sizes="(min-width: 1024px) 350px, 300px"
              className="rounded-full object-cover"
              priority
            />

            <div className="absolute -bottom-4 -right-22 md:-bottom-8 sm:-right-25 xl:-bottom-4 2xl:-right-25 z-10 flex gap-[10px] lg:gap-[15px]">
              <span className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-lime-500 ring-4 ring-card block" />

              <div className="leading-tight">
                <p className="text-sm md:text-lg font-bold text-foreground">
                  {t("first_name")} <br /> {t("second_name")}
                </p>
                <p className="text-xs md:text-base font-extralight">
                  {t("position")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
