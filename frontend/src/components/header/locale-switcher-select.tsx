"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { useLocale, Locale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";

type Props = {
  label: string;
  defaultValue?: string;
  withIcon?: boolean;
};

const localeLabels: Partial<Record<Locale, string>> = {
  ru: "Русс",
  en: "Eng",
  tr: "Türk",
  ky: "Кырг",
};

export default function LocaleSwitcherSelect({
  label,
  withIcon = true,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  function onValueChange(next: string) {
    const nextLocale = next as Locale;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <Select
      defaultValue={currentLocale}
      onValueChange={onValueChange}
      disabled={isPending}
    >
      <SelectTrigger
        id="locale-switcher"
        className="w-[120px] text-xs md:text-sm"
        aria-label={label}
      >
        {withIcon && <Globe aria-hidden className="h-4 w-4 shrink-0" />}
        <SelectValue placeholder="Select locale" />
      </SelectTrigger>

      <SelectContent align="end" className="w-[120px]">
        {routing.locales.map((loc) => (
          <SelectItem key={loc} value={loc} className="text-xs md:text-sm">
            {localeLabels[loc as Locale] ?? loc}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
