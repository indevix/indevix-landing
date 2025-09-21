import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  Clock,
  Timer,
  Type,
  Palette,
  Code,
  ListTodo,
  Brush,
  Tag as TagIcon,
  SearchCode,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "./ui/badge";

const STATIC_ICON_MAP: Record<string, LucideIcon> = {
  copywriting: Type,
  design: Palette,
  development: Code,
  planning: ListTodo,
  illustration: Brush,
  "Pre-project analysis": SearchCode,
};

function getIconForTag(name: string): LucideIcon {
  const key = name.trim().toLowerCase();

  if (key.includes("month")) return Calendar;
  if (key.includes("week")) return Clock;
  if (key.includes("day")) return Timer;

  return STATIC_ICON_MAP[key] ?? TagIcon;
}

interface ProjectTagsProps {
  tags: string[];
}

export function ProjectTags({ tags }: ProjectTagsProps) {
  const t = useTranslations("tags");

  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => {
        const Icon = getIconForTag(tag);
        return (
          <Badge
            variant="outline"
            key={tag}
            className="flex items-center text-[15px] font-extralight md:text-[17px] gap-[10px] rounded-[100px] bg-[#1D1D1D] border-0"
          >
            {Icon && <Icon className="w-4 h-4" />}
            {t(tag)}
          </Badge>
        );
      })}
    </div>
  );
}
