import Image from "next/image";
import { ProjectImageModal } from "./project-image-modal";

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

export function ProjectImage({
  src,
  alt,
  title,
  className,
}: ProjectImageProps) {
  // SEO-оптимизированный alt текст
  const seoAlt = `${title} - ${alt} | Indevix Web Development Project`;

  return (
    <ProjectImageModal src={src} alt={seoAlt} title={title}>
      <div
        className={`relative overflow-hidden cursor-pointer group ${className}`}
      >
        <Image
          src={src}
          alt={seoAlt}
          width={440}
          height={440}
          className="object-cover object-top w-[440px] h-[440px] transition-transform duration-300 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-card to-transparent/30" />
      </div>
    </ProjectImageModal>
  );
}
