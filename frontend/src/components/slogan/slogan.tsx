"use client";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import SloganWord from "./slogan-word";
import SloganBackground from "./slogan-background";
import { WordState } from "./types";

export default function Slogan() {
  const t = useTranslations("Slogan");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [wordStates, setWordStates] = useState<Map<number, WordState>>(
    new Map()
  );
  const [isInteracting, setIsInteracting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const words = useMemo(() => [t("1"), t("2"), t("3"), t("4"), t("5")], [t]);

  useEffect(() => {
    const initialStates = new Map<number, WordState>();
    words.forEach((_, index) => {
      initialStates.set(index, "hidden");
    });
    setWordStates(initialStates);
  }, [words]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          words.forEach((_, index) => {
            setTimeout(() => {
              setWordStates((prev) => new Map(prev).set(index, "appearing"));

              setTimeout(() => {
                setWordStates((prev) => new Map(prev).set(index, "visible"));
              }, 1200);
            }, index * 300);
          });
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px",
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible, words]);

  const handleWordHover = useCallback(
    (index: number) => {
      setHoveredIndex(index);
      setIsInteracting(true);

      setTimeout(() => {
        if (hoveredIndex === index) {
          setHoveredIndex(null);
          setIsInteracting(false);
        }
      }, 2000);
    },
    [hoveredIndex]
  );

  const handleWordClick = useCallback((index: number) => {
    setIsInteracting(true);

    setWordStates((prev) => {
      const newStates = new Map(prev);
      const currentState = newStates.get(index) || "visible";

      switch (currentState) {
        case "visible":
          newStates.set(index, "destroying");
          setTimeout(() => {
            setWordStates((states) => {
              const updated = new Map(states);
              if (updated.get(index) === "destroying") {
                updated.set(index, "assembling");
                setTimeout(() => {
                  setWordStates((finalStates) => {
                    const final = new Map(finalStates);
                    if (final.get(index) === "assembling") {
                      final.set(index, "visible");
                    }
                    return final;
                  });
                }, 1200);
              }
              return updated;
            });
          }, 800);
          break;

        case "destroying":
        case "assembling":
        case "appearing":
          break;
      }

      return newStates;
    });

    setTimeout(() => {
      setIsInteracting(false);
    }, 2000);
  }, []);

  const getWordState = (index: number): WordState => {
    return wordStates.get(index) || "appearing";
  };

  return (
    <article
      ref={containerRef}
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

      <section className="relative flex flex-wrap justify-center items-center gap-4 md:gap-6 z-10">
        {words.map((word, index) => (
          <SloganWord
            key={index}
            word={word}
            index={index}
            state={getWordState(index)}
            onClick={() => handleWordClick(index)}
            onHover={() => handleWordHover(index)}
            delay={index * 0.3}
          />
        ))}
      </section>
    </article>
  );
}
