import type { LucideIcon } from "lucide-react";
import {
  Type,
  Palette,
  Code,
  ListTodo,
  Brush,
  SearchCode,
  Monitor,
  Globe,
  Users,
  TrendingUp,
  BadgeCheck,
  Workflow,
  Gauge,
  PiggyBank,
  Contact,
  Settings,
  PlugZap,
  Cable,
  Expand,
  KeyRound,
  LifeBuoy,
  Wrench,
  ShieldCheck,
  Clock,
  Shield,
  BarChart3,
  Database,
  FileBarChart,
  Lightbulb,
  Target,
  PanelsTopLeft,
  LayoutTemplate,
  Pointer,
  ThumbsUp,
  Calendar,
  Timer,
  TagIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "@ui/badge";

const STATIC_ICON_MAP: Record<string, LucideIcon> = {
  copywriting: Type,
  design: Palette,
  development: Code,
  planning: ListTodo,
  illustration: Brush,
  "pre-project analysis": SearchCode,

  website: Monitor,
  "online presence": Globe,
  clients: Users,
  sales: TrendingUp,
  brand: BadgeCheck,
  branding: BadgeCheck,

  automation: Workflow,
  processes: Settings,
  efficiency: Gauge,
  savings: PiggyBank,
  crm: Contact,

  integration: PlugZap,
  api: Cable,
  scaling: Expand,
  turnkey: KeyRound,

  support: LifeBuoy,
  maintenance: Wrench,
  reliability: ShieldCheck,
  "24/7": Clock,
  security: Shield,

  analytics: BarChart3,
  data: Database,
  reports: FileBarChart,
  insights: Lightbulb,
  strategy: Target,

  interfaces: PanelsTopLeft,
  ui: LayoutTemplate,
  ux: Pointer,
  usability: ThumbsUp,

  "3 months": Calendar,
  "2 months": Calendar,
  "1 month": Calendar,
  "2 weeks": Clock,
  "1 week": Clock,
  "20 days": Timer,
};

function normalizeTag(name: string) {
  return name.trim().toLowerCase().replace(/\s+/g, " ").replace(/–|—/g, "-");
}

function getIconForTag(name: string): LucideIcon {
  const key = normalizeTag(name);

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
            className="flex items-center gap-[10px] rounded-[100px] bg-[#1D1D1D] border-0 text-[15px] font-extralight md:text-[17px]"
          >
            <Icon className="w-4 h-4" aria-hidden />
            {t(tag)}
          </Badge>
        );
      })}
    </div>
  );
}
