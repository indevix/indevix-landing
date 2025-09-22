import { useTranslations } from "next-intl";
import { projectsData } from "@config/projects-data";
import { Project } from "./project";
import { Button } from "@ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectsProps {
  limit?: number;
  all?: boolean;
}

export default function Projects({ limit, all = false }: ProjectsProps) {
  const t = useTranslations("Navigation");

  return (
    <article
      id="projects"
      className="container flex flex-col mx-auto px-[15px] py-20 gap-10 items-center"
    >
      <h2 className="text-3xl md:text-[40px] font-semibold w-full">
        {t("projects")}
      </h2>
      <section className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {(limit ? projectsData.slice(0, limit) : projectsData).map(
          (project) => (
            <Project key={project.title} data={project} />
          )
        )}
      </section>
      {all ? null : (
        <Button className="w-full sm:w-[440px] lg:w-[40%] xl:w-[30%] py-5 px-[30px] ">
          <Link
            href="/projects"
            className="text-base font-medium md:text-xl flex items-center gap-[10px] md:gap-5"
          >
            {t("all projects")}

            <div className="flex items-center justify-center rounded-full w-7 h-7 bg-background md:w-9 md:h-9">
              {" "}
              <ArrowUpRight
                size={32}
                strokeWidth={1}
                className="min-w-6 min-h-6 md:min-w-8 md:min-h-8 text-foreground"
              />
            </div>
          </Link>
        </Button>
      )}
    </article>
  );
}
