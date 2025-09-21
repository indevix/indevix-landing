import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselIndicator,
} from "@ui/carousel";
import { Button } from "@ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Review } from "@types/review.types";
import { ProjectImageModal } from "@components/projects/project-image-modal";

export default function Reviews() {
  const t = useTranslations("Reviews");
  const items = t.raw("items") as Review[];

  return (
    <article
      id="reviews"
      className="container mx-auto px-[15px] py-20 flex flex-col items-center"
    >
      <div className="w-full flex flex-col gap-[10px] mb-6 sm:mb-8">
        <p className="font-tektur text-xs md:text-sm text-foreground/70">
          {t("subtitle")}
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold">
          {t("title")}
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          duration: 20,
          slidesToScroll: 1,
          containScroll: "trimSnaps",
        }}
        className="w-full md:max-w-6xl"
      >
        <CarouselContent className="gap-5">
          {items.map((review) => (
            <CarouselItem key={review.id} className="basis-full">
              <div className="rounded-[40px] border border-border bg-card p-10 flex gap-5 flex-col lg:flex-row w-full">
                <div className="flex-1 lg:w-1/2 flex flex-col gap-10 text-wrap">
                  <Image
                    src={review.logo}
                    alt={review.id}
                    width={200}
                    height={100}
                    className="w-auto h-[38px] object-contain mr-auto"
                  />
                  <div className="flex flex-col gap-5 text-[15px] md:text-[17px]">
                    <div className="flex flex-row">
                      <h4 className="font-bold text-foreground">
                        {review.name}
                      </h4>{" "}
                      <span className="before:content-['|'] before:mr-2">
                        {review.position}
                      </span>
                    </div>

                    <blockquote className="text-foreground leading-relaxed">
                      {review.text}
                    </blockquote>
                  </div>
                </div>

                <ProjectImageModal
                  src={review.image}
                  alt={review.name}
                  title={review.id}
                >
                  <div className="relative overflow-hidden cursor-pointer group rounded-[30px]">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={440}
                      height={440}
                      className="object-cover object-top w-[440px] h-[440px] transition-transform duration-300 ease-in-out group-hover:scale-105 hidden lg:block"
                    />
                    <Button className="flex lg:hidden">
                      {t("view_all")}
                      <ArrowUpRight />
                    </Button>
                  </div>
                </ProjectImageModal>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselIndicator className="mt-10" showArrows={true} />
      </Carousel>
    </article>
  );
}
