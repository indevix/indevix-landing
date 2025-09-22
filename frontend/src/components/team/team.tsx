import { Member } from "@/types/member.types";
import { useTranslations } from "next-intl";
import { MemberCard } from "./member-card";

export default function Team() {
  const t = useTranslations("Team");
  const team = t.raw("members") as Member[];

  return (
    <article
      id="team"
      className="container mx-auto px-[15px] py-20 flex flex-col items-center gap-10"
    >
      <div className="w-full flex flex-col gap-[10px]">
        <p className="font-tektur text-xs md:text-sm text-foreground/70">
          {t("subtitle")}
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold">
          {t("title")}
        </h2>
      </div>

      <section className="grid grid-cols-3 gap-5">
        {team.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </section>
    </article>
  );
}
