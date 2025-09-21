import { IService } from "@config/services-data";
import { useTranslations } from "next-intl";
import { Button } from "@ui/button";
import { ProjectTags } from "../tags";

export default function Services() {
  const t = useTranslations("Services");
  const items = t.raw("items") as IService[];

  return (
    <article
      id="services"
      className="container mx-auto px-[15px] py-20 flex flex-col items-center"
    >
      <div className="w-full flex flex-col gap-[10px] mb-6 sm:mb-8">
        <p className="font-tektur text-xs md:text-sm text-foreground/70">
          {t("subtitle")}
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold">
          {t("title")}
        </h2>
      </div>

      <section className="flex flex-wrap justify-center gap-5">
        {items.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between w-[440px] h-[490px] bg-card border border-border p-5 rounded-[30px]"
          >
            <div className="flex flex-col gap-10">
              <h3 className="font-semibold text-foreground text-xl md:text-2xl">
                {service.title}
              </h3>
              <div>
                <ProjectTags tags={service.tags} />
              </div>
            </div>

            <div>
              <div className="flex gap-[5px] text-foreground items-baseline">
                <span className="text-xs md:text-sm font-extralight">
                  {t("from")}
                </span>
                <span className="text-xl md:text-2xl font-semibold">
                  {service.price}
                </span>
              </div>
              <Button className="w-full mt-5 py-5 px-[30px]">
                {t("more")}
              </Button>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}
