"use client";

import { ProjectTags } from "@components/tags";
import { Button } from "@ui/button";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useState } from "react";
import { ServiceModal } from "./service-modal";
import type { Service } from "@/types/service.types";

export function ServiceCard({ service }: { service: Service }) {
  const t = useTranslations("Shared");
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      className="group relative flex flex-col justify-between max-w-[350px] xl:max-w-[400px] min-h-[490px] max-h-[490px] bg-card border border-border p-6 rounded-[30px] overflow-hidden cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 rounded-[30px] border-2 border-primary/20 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="absolute inset-0 opacity-[0.15]">
        <svg
          width="400"
          height="490"
          viewBox="0 0 400 490"
          fill="none"
          className="w-full h-full"
        >
          <g clipPath="url(#clip0_6_2)">
            <rect
              x="-150"
              y="400"
              width="495.503"
              height="150"
              rx="75"
              transform="rotate(-18 -119 380)"
              fill="currentColor"
            />
            <rect
              x="-100"
              y="510"
              width="622.887"
              height="150"
              rx="75"
              transform="rotate(-18 -51 400)"
              fill="currentColor"
            />
          </g>
          <rect
            x="1"
            y="1"
            width="400"
            height="1000"
            rx="29"
            strokeWidth="2"
            opacity="0.3"
          />
          <defs>
            <clipPath id="clip0_6_2">
              <rect width="400" height="1000" rx="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col gap-10">
        <motion.h3
          className={`font-semibold text-xl md:text-2xl transition-colors duration-300 ${
            isHovered ? "text-primary" : "text-foreground"
          }`}
        >
          {service.title}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProjectTags tags={service.tags} />
        </motion.div>
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          className={`flex gap-[5px] items-baseline mb-5 transition-colors duration-300 ${
            isHovered ? "text-primary" : "text-foreground"
          }`}
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-xs md:text-sm font-extralight">
            {t("from")}
          </span>
          <span className="text-xl md:text-2xl font-semibold">
            {service.price}
          </span>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            className="w-full py-5 px-[30px] relative overflow-hidden group/btn"
            variant={isHovered ? "default" : "outline"}
            onClick={handleOpenModal}
          >
            <span
              className={`relative z-10 transition-colors duration-300 ${
                isHovered ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              {t("more")}
            </span>

            <motion.div
              className="absolute inset-0 bg-primary"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isHovered ? 1 : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ originX: 0.5, originY: 0.5 }}
            />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-accent/20 opacity-0"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
          x: isHovered ? 0 : -10,
          y: isHovered ? 0 : 10,
        }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      />

      <ServiceModal
        service={service}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </motion.div>
  );
}
