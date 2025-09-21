"use client";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@ui/dialog";
import Image from "next/image";
import { ReactNode } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ProjectImageModalProps {
  children: ReactNode;
  src: string;
  alt: string;
  title: string;
}

export function ProjectImageModal({
  children,
  src,
  alt,
  title,
}: ProjectImageModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="px-[10px] max-h-[90vh] p-0 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>
        <div className="overflow-y-auto max-h-[90vh]">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={2400}
            className="object-contain w-full h-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
