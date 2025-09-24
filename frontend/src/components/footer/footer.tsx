import { Service } from "@/types/service.types";
import { contactsMeta } from "@config/contacts-meta";
import { useTranslations } from "next-intl";

export default function Footer() {
  const f = useTranslations("Footer");
  const c = useTranslations("Contact");
  const s = useTranslations("Services");
  const items = s.raw("items") as Service[];

  return (
    <footer className="max-w-[2000px] mx-auto mt-15 py-20 px-5 text-foreground bg-card flex flex-col">
      <div className="flex flex-col sm:flex-row gap-5 justify-between pb-[30px] border-b border-border">
        <div className="flex flex-col text-[15px] md:text-[17px] font-extralight gap-5 text-nowrap">
          <a href={contactsMeta.phone.href} className="text-xl font-bold">
            {contactsMeta.phone.value}
          </a>
          <a href={contactsMeta.telegram.href} className="hover:underline">
            {c("telegram.title")}
          </a>
          <a href={contactsMeta.whatsapp.href} className="hover:underline">
            {c("whatsapp.title")}
          </a>
          <a href={contactsMeta.email.href} className="hover:underline">
            {contactsMeta.email.value}
          </a>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[15px] md:text-[17px] font-bold">{s("title")}</h3>
          <ul className="flex flex-wrap text-[15px] md:text-[17px] gap-[30px] font-extralight">
            {items.map((service) => (
              <li key={service.id}>{service.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 text-[13px] md:text-[15px] font-extralight pt-[30px] justify-between">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col">
            <p>{f("Copyright")}</p>
            <p>{f("Trademark")}</p>
          </div>
          <p className="lg:max-w-[300px]">{f("Disclaimer")}</p>
        </div>
        <p className="lg:max-w-[300px]">{f("Info")}</p>
      </div>
    </footer>
  );
}
