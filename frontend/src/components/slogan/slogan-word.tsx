"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import { SloganWordProps, WordStyle } from "./types";

// Styles can be kept as they are, they are for visual variety
const wordStyles: WordStyle[] = [
  {
    background:
      "linear-gradient(135deg, rgba(100, 100, 100, 0.15) 0%, rgba(80, 80, 80, 0.25) 100%)",
    color: "#ffffff",
    borderColor: "rgba(255, 255, 255, 0.1)",
    shadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
  },
  {
    background:
      "linear-gradient(135deg, rgba(120, 120, 120, 0.15) 0%, rgba(90, 90, 90, 0.25) 100%)",
    color: "#e5e5e5",
    borderColor: "rgba(255, 255, 255, 0.15)",
    shadow: "0 10px 28px rgba(0, 0, 0, 0.35)",
  },
  {
    background:
      "linear-gradient(135deg, rgba(110, 110, 110, 0.15) 0%, rgba(85, 85, 85, 0.25) 100%)",
    color: "#f0f0f0",
    borderColor: "rgba(255, 255, 255, 0.12)",
    shadow: "0 9px 26px rgba(0, 0, 0, 0.32)",
  },
  {
    background:
      "linear-gradient(135deg, rgba(130, 130, 130, 0.15) 0%, rgba(95, 95, 95, 0.25) 100%)",
    color: "#f5f5f5",
    borderColor: "rgba(255, 255, 255, 0.18)",
    shadow: "0 11px 30px rgba(0, 0, 0, 0.38)",
  },
  {
    background:
      "linear-gradient(135deg, rgba(105, 105, 105, 0.15) 0%, rgba(75, 75, 75, 0.25) 100%)",
    color: "#ffffff",
    borderColor: "rgba(255, 255, 255, 0.14)",
    shadow: "0 12px 32px rgba(0, 0, 0, 0.4)",
  },
];

export default function SloganWord({
  word,
  index,
  state,
  onClick,
  onAnimationComplete,
}: SloganWordProps) {
  const style = wordStyles[index % wordStyles.length];
  const chars = useMemo(() => word.split(""), [word]);

  const wordWrapperVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      variants={wordWrapperVariants}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      className="relative"
    >
      <AnimatePresence>
        {state !== "exploding" && (
          <motion.button
            key="button"
            className="relative overflow-hidden outline-none focus:outline-none group cursor-pointer select-none border"
            style={{
              background: style.background,
              color: style.color,
              borderRadius: "25px",
              boxShadow: style.shadow,
              borderColor: style.borderColor,
              backdropFilter: "blur(10px)",
            }}
            onClick={onClick}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <div className="relative z-10 px-6 py-3 md:px-10 md:py-5 font-bold text-lg md:text-2xl lg:text-3xl whitespace-nowrap">
              {word}
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {state === "exploding" && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          {chars.map((char, charIndex) => (
            <motion.span
              key={`${index}-${charIndex}`}
              className="font-bold text-lg md:text-2xl lg:text-3xl"
              style={{ color: style.color }}
              initial={{ opacity: 1, x: 0, y: 0 }}
              animate={{
                opacity: 0,
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
                scale: 0,
              }}
              transition={{ duration: 1, delay: Math.random() * 0.2 }}
              onAnimationComplete={
                charIndex === chars.length - 1 ? onAnimationComplete : undefined
              }
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
