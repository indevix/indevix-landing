"use client";

import { useTranslations } from "next-intl";
import { Button } from "@ui/button";
import { contactsMeta } from "@config/contacts-meta";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface ContactSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactSidebar({ isOpen, onClose }: ContactSidebarProps) {
  const t = useTranslations("ContactSidebar");

  if (!isOpen) return null;

  return createPortal(
    <aside
      className={`fixed top-0 right-0 h-full w-80 bg-sidebar rounded-l-[50px] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-5 border-b">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-10 w-10 flex items-center justify-center"
        >
          <X style={{ width: 20, height: 20 }} strokeWidth={3} />
        </Button>
      </div>

      <section className="w-full flex flex-col items-center">
        <a
          href={contactsMeta.phone.href}
          className="flex flex-col w-full space-x-4 text-foreground hover:bg-accent/50 px-5 py-[10px]"
        >
          <p className="text-sm md:text-base">{contactsMeta.phone.label}</p>
          <span className="text-base md:text-xl font-semibold">
            {contactsMeta.phone.value}
          </span>
        </a>

        <a
          href={contactsMeta.email.href}
          className="flex flex-col w-full space-x-4 text-foreground hover:bg-accent/50 px-5 py-[10px]"
        >
          <p className="text-sm md:text-base">{contactsMeta.email.label}</p>
          <span className="text-base md:text-lg font-semibold">
            {contactsMeta.email.value}
          </span>
        </a>

        <Button className="flex w-70 flex-col mx-5 mt-10 mb-2.5, hover:text-[#25d366] hover:bg-background transition-transform duration-200 ease-in-out hover:scale-105">
          <a
            href={contactsMeta.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base w-full font-semibold"
          >
            {t("whatsapp.title")}
          </a>
        </Button>

        <Button className="flex w-70 flex-col mx-5 mt-2.5 mb-10 hover:text-[#1c93e3] hover:bg-background transition-transform duration-200 ease-in-out hover:scale-105">
          <a
            href={contactsMeta.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base w-full font-semibold"
          >
            {t("telegram.title")}
          </a>
        </Button>
      </section>
    </aside>,
    document.getElementById("modal-root")!
  );
}
