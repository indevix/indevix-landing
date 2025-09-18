import { useTranslations } from "next-intl";
import { Contact } from "./contact";
import { contactsMeta } from "@config/contacts-meta";

export function Contacts() {
  const t = useTranslations("ContactSidebar");

  return (
    <div className="flex items-center gap-5">
      <div className="hidden md:flex flex-col gap-[5px]">
        <a
          href={contactsMeta.phone.href}
          className="text-sm md:text-base font-semibold"
        >
          {contactsMeta.phone.value}
        </a>
        <a href={contactsMeta.email.href} className="text-xs md:text-sm">
          {contactsMeta.email.value}
        </a>
      </div>
      <Contact>{t("title")}</Contact>
    </div>
  );
}
