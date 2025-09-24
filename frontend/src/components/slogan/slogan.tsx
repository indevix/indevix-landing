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

  // Слова слогана
  const words = useMemo(
    () => [
      t("1"), // We
      t("2"), // turn
      t("3"), // ideas
      t("4"), // into ready-made
      t("5"), // solutions
    ],
    [t]
  );

  // Инициализация - все слова скрыты до появления в viewport
  useEffect(() => {
    const initialStates = new Map<number, WordState>();
    words.forEach((_, index) => {
      initialStates.set(index, "hidden");
    });
    setWordStates(initialStates);
  }, [words]);

  // Intersection Observer для отслеживания скролла
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          // Запускаем постепенное появление слов
          words.forEach((_, index) => {
            setTimeout(() => {
              setWordStates((prev) => new Map(prev).set(index, "appearing"));

              // Переход в visible состояние
              setTimeout(() => {
                setWordStates((prev) => new Map(prev).set(index, "visible"));
              }, 1200); // Длительность appearing анимации
            }, index * 300); // Задержка между словами
          });
        }
      },
      {
        threshold: 0.3, // Триггер когда 30% элемента видно
        rootMargin: "-50px 0px", // Немного отступа сверху/снизу
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

  // Обработка hover
  const handleWordHover = useCallback(
    (index: number) => {
      setHoveredIndex(index);
      setIsInteracting(true);

      // Сброс состояния через 2 секунды
      setTimeout(() => {
        if (hoveredIndex === index) {
          setHoveredIndex(null);
          setIsInteracting(false);
        }
      }, 2000);
    },
    [hoveredIndex]
  );

  // Циклическая логика состояний: visible → destroying → assembling → visible
  const handleWordClick = useCallback((index: number) => {
    setIsInteracting(true);

    setWordStates((prev) => {
      const newStates = new Map(prev);
      const currentState = newStates.get(index) || "visible";

      switch (currentState) {
        case "visible":
          newStates.set(index, "destroying");
          // Через время анимации разрушения переходим в assembling
          setTimeout(() => {
            setWordStates((states) => {
              const updated = new Map(states);
              if (updated.get(index) === "destroying") {
                updated.set(index, "assembling");
                // Через время анимации сборки переходим в visible
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
          // Во время анимации игнорируем клики
          break;
      }

      return newStates;
    });

    // Сброс состояния взаимодействия
    setTimeout(() => {
      setIsInteracting(false);
    }, 2000);
  }, []);

  // Получение состояния слова
  const getWordState = (index: number): WordState => {
    return wordStates.get(index) || "appearing";
  };

  return (
    <article
      ref={containerRef}
      id="slogan"
      className="container mx-auto px-[15px] py-20 flex flex-col items-center gap-16 relative overflow-hidden"
    >
      {/* Минималистичный фон */}
      <SloganBackground isInteracting={isInteracting} wordStates={wordStates} />

      {/* Заголовок секции */}
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

      {/* Интерактивные слова */}
      <section className="relative flex flex-wrap justify-center items-center gap-4 md:gap-6 z-10">
        {words.map((word, index) => (
          <SloganWord
            key={index}
            word={word}
            index={index}
            state={getWordState(index)}
            onClick={() => handleWordClick(index)}
            onHover={() => handleWordHover(index)}
            delay={index * 0.3} // Увеличенная задержка для постепенного появления
          />
        ))}
      </section>
    </article>
  );
}
