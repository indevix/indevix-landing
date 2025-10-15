"use client";

import { useTranslations } from "next-intl";
import { StackScroller } from "./stack-scroller";
import { motion } from "framer-motion";

export default function Stack() {
  const t = useTranslations("Stack");

  return (
    <motion.section
      className="px-[15px] py-20 container mx-auto flex flex-col gap-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center flex flex-col gap-4 items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {t("title")}
        </h2>
        <p className="text-base md:text-lg text-foreground/70 max-w-4xl">
          {t("subtitle")}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <StackScroller />
      </motion.div>
    </motion.section>
  );
}
