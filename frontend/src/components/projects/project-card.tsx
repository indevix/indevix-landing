import { ProjectTags } from "@components/tags";

interface ProjectCardProps {
  kind: string;
  title: string;
  tags: string[];
}

export function ProjectCard({ kind, title, tags }: ProjectCardProps) {
  return (
    <div className="relative z-10 flex flex-col gap-5 px-5 pb-5 rounded-b-[40px] bg-card">
      <div className="flex flex-col">
        <p className="text-[10px] md:text-xs font-extralight font-tektur text-foreground/50 w-full -mt-2">
          {kind}
        </p>
        <h3 className="mt-2 text-xl font-semibold md:text-2xl">{title}</h3>
      </div>
      <ProjectTags tags={tags} />
    </div>
  );
}
