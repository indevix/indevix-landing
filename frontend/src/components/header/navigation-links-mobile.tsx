"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { navigationLinks as links } from "@config/navigation-links";
import Link from "next/link";
import LocaleSwitcherSelect from "./locale-switcher-select";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface NavigationProps {
  landing?: boolean;
}

export function NavigationLinksMobile({ landing = true }: NavigationProps) {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="flex xl:hidden p-[20px] mx-[10px] h-[40px] md:h-[50px] md:w-[50px]"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Открыть меню</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-80 p-0"
        aria-describedby="mobile-menu-description"
      >
        <SheetHeader>
          <SheetTitle>
            <SheetClose asChild className="focus:ring-0" />
          </SheetTitle>
        </SheetHeader>
        <span id="mobile-menu-description" className="sr-only">
          Indevix
        </span>

        <div className="flex flex-col h-full">
          <nav className="flex-1">
            {links.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={landing ? link.href : `/${locale}${link.href}`}
                  className="block text-base md:text-xl font-medium text-foreground hover:text-primary hover:bg-accent transition-colors p-2"
                >
                  {t(`${link.name}`)}
                </Link>
              </SheetClose>
            ))}
          </nav>

          <div className="flex flex-col border-t p-5 gap-[10px]">
            <p className="text-sm md:text-base text-muted-foreground">
              {t("language")}
            </p>
            <LocaleSwitcherSelect
              defaultValue={locale}
              label="Выберите язык"
              withIcon={false}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
