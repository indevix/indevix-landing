"use client";

import { useTranslations } from "next-intl";
import { Button } from "@ui/button";
import { contactsMeta } from "@config/contacts-meta";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface ContactSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactSidebar({ isOpen, onClose }: ContactSidebarProps) {
  const t = useTranslations("ContactSidebar");

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        className="w-80 p-0"
        aria-describedby="contact-sidebar-description"
      >
        <SheetHeader className="p-5 border-b">
          <SheetTitle className="text-left">{t("title")}</SheetTitle>
        </SheetHeader>

        <span id="contact-sidebar-description" className="sr-only">
          {t("title")}
        </span>

        <section className="w-full flex flex-col items-center p-5">
          <a
            href={contactsMeta.phone.href}
            className="flex flex-col w-full text-foreground hover:bg-accent/50 px-5 py-[10px] rounded-lg transition-colors"
          >
            <p className="text-sm md:text-base text-muted-foreground">
              {t("phone.label")}
            </p>
            <span className="text-base md:text-xl font-semibold">
              {contactsMeta.phone.value}
            </span>
          </a>

          <a
            href={contactsMeta.email.href}
            className="flex flex-col w-full text-foreground hover:bg-accent/50 px-5 py-[10px] rounded-lg transition-colors"
          >
            <p className="text-sm md:text-base text-muted-foreground">
              {contactsMeta.email.label}
            </p>
            <span className="text-base md:text-lg font-semibold">
              {contactsMeta.email.value}
            </span>
          </a>

          <div className="flex flex-col gap-4 mt-8 w-full">
            <Button
              asChild
              className="w-full hover:text-[#25d366] hover:bg-background transition-all duration-200 ease-in-out hover:scale-105"
              variant="outline"
            >
              <a
                href={contactsMeta.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold"
              >
                {t("whatsapp.title")}
              </a>
            </Button>

            <Button
              asChild
              className="w-full hover:text-[#1c93e3] hover:bg-background transition-all duration-200 ease-in-out hover:scale-105"
              variant="outline"
            >
              <a
                href={contactsMeta.telegram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold"
              >
                {t("telegram.title")}
              </a>
            </Button>
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
}
