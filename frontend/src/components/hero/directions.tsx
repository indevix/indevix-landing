import { useTranslations } from "next-intl";
import { Monitor, PenTool, Workflow } from "lucide-react";

const directions = [
  { id: "web", icon: Monitor },
  { id: "design", icon: PenTool },
  { id: "automation", icon: Workflow },
];

export function Directions() {
  const t = useTranslations("Hero");

  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 py-15">
      {directions.map(({ id, icon: Icon }) => {
        const items: string[] = t.raw(`direction.${id}.list`);

        return (
          <div
            key={id}
            className="p-10 rounded-[40px] border border-border bg-card flex flex-col gap-10"
          >
            <Icon className="w-[35px] h-[35px] text-primary" />
            <div className="flex flex-col gap-5">
              <h3 className="text-base font-semibold md:text-xl">
                {t(`direction.${id}.title`)}
              </h3>
              <ul className="space-y-[5px] text-[15px] md:text-[17px] font-extralight text-foreground">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
}
