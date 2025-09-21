import { useTranslations } from "next-intl";
import { ServiceCard } from "./service-card";
import type { Service } from "@/types/service.types";

export default function Services() {
  const t = useTranslations("Services");
  const items = t.raw("items") as Service[];

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
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
    </article>
  );
}
