import { ProjectImage } from "./project-image";
import { ProjectCard } from "./project-card";
import type { Project } from "@/types/project.types";

export function Project({ data }: { data: Project }) {
  return (
    <div className="rounded-[40px] max-w-[440px]">
      <ProjectImage
        src={data.url}
        alt={data.title}
        title={data.title}
        className="rounded-t-[40px]"
      />
      <ProjectCard kind={data.kind} title={data.title} tags={data.tags} />
    </div>
  );
}
