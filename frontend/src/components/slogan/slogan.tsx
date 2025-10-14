"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState, useCallback, useMemo } from "react";
import SloganWord from "./slogan-word";
import SloganBackground from "./slogan-background";
import { WordState } from "./types";

export default function Slogan() {
  const t = useTranslations("Slogan");
  const [wordStates, setWordStates] = useState<Map<number, WordState>>(
    new Map()
  );
  const [isInteracting, setIsInteracting] = useState(false);

  const words = useMemo(() => [t("1"), t("2"), t("3"), t("4"), t("5")], [t]);

  const handleWordClick = useCallback((index: number) => {
    setWordStates((prev) => new Map(prev).set(index, "exploding"));
    setIsInteracting(true);
  }, []);

  const handleAnimationComplete = useCallback((index: number) => {
    setWordStates((prev) => new Map(prev).set(index, "visible"));
    // A timeout to smooth out the interaction state change
    setTimeout(() => setIsInteracting(false), 500);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <article
      id="slogan"
      className="container mx-auto px-[15px] py-20 flex flex-col items-center gap-16 relative overflow-hidden"
    >
      <SloganBackground isInteracting={isInteracting} wordStates={wordStates} />

      <div className="w-full flex flex-col gap-[10px] text-center relative z-10">
        <motion.p
          className="font-tektur text-xs md:text-sm text-foreground/70"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("subtitle")}
        </motion.p>
      </div>

      <motion.section
        className="relative flex flex-wrap justify-center items-center gap-4 md:gap-6 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {words.map((word, index) => (
          <SloganWord
            key={index}
            word={word}
            index={index}
            state={wordStates.get(index) || "visible"} // Default to visible after initial animation
            onClick={() => handleWordClick(index)}
            onAnimationComplete={() => handleAnimationComplete(index)}
          />
        ))}
      </motion.section>
    </article>
  );
}