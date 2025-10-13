"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useMemo } from "react";
import { SloganWordProps, WordStyle } from "./types";

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
  onHover,
  delay,
}: SloganWordProps) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const style = wordStyles[index % wordStyles.length];

  const chars = useMemo(() => word.split(""), [word]);

  const handleClick = () => {
    setIsHovered(false);
    onClick();
  };

  const handleHover = () => {
    setIsHovered(true);
    onHover();
  };

  const getWordAnimation = () => {
    switch (state) {
      case "hidden":
        return {
          opacity: 0,
          scale: 0.3,
          y: 80,
          rotateX: -90,
          rotateZ: -45,
        };
      case "appearing":
        return {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          rotateZ: 0,
        };
      case "visible":
        return {
          opacity: 1,
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -5 : 0,
          rotateX: 0,
          rotateZ: 0,
        };
      case "destroying":
        return {
          opacity: 0,
          scale: 1.2,
          rotateZ: 180,
        };
      case "assembling":
        return {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateZ: 0,
        };
      default:
        return {};
    }
  };

  const getTransition = () => {
    switch (state) {
      case "appearing":
        return {
          duration: 1.2,
          delay,
          type: "spring" as const,
          bounce: 0.6,
          stiffness: 200,
          damping: 15,
        };
      case "destroying":
        return {
          duration: 0.6,
          type: "spring" as const,
          stiffness: 300,
        };
      case "assembling":
        return {
          duration: 1,
          type: "spring" as const,
          bounce: 0.3,
        };
      default:
        return {
          duration: 0.3,
          type: "spring" as const,
          stiffness: 400,
        };
    }
  };

  if (state === "destroying" || state === "assembling") {
    return (
      <div className="relative inline-block">
        {chars.map((char, charIndex) => (
          <motion.span
            key={`${index}-${charIndex}-${state}`}
            className="inline-block font-bold text-lg md:text-2xl lg:text-3xl"
            style={{
              color: style.color,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            }}
            initial={
              state === "destroying"
                ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    x: (Math.random() - 0.5) * 200,
                    y: (Math.random() - 0.5) * 200,
                    rotate: Math.random() * 360,
                    scale: 0.3,
                  }
            }
            animate={
              state === "destroying"
                ? {
                    opacity: 0,
                    x: (Math.random() - 0.5) * 200,
                    y: (Math.random() - 0.5) * 200,
                    rotate: Math.random() * 360,
                    scale: 0.3,
                  }
                : {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                  }
            }
            transition={{
              duration: state === "destroying" ? 0.8 : 1.2,
              delay: charIndex * 0.05,
              type: "spring",
              bounce: state === "assembling" ? 0.4 : 0,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {state !== "hidden" && (
        <motion.button
          ref={buttonRef}
          className="relative overflow-hidden outline-none focus:outline-none group cursor-pointer select-none border"
          style={{
            background: style.background,
            color: style.color,
            borderRadius: "25px",
            boxShadow: style.shadow,
            borderColor: style.borderColor,
            backdropFilter: "blur(10px)",
            perspective: "1000px",
          }}
          initial={getWordAnimation()}
          animate={getWordAnimation()}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={getTransition()}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: `${style.shadow}, 0 0 20px rgba(255, 255, 255, 0.1)`,
            transition: {
              duration: 0.2,
              type: "spring" as const,
              stiffness: 400,
            },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 },
          }}
          onClick={handleClick}
          onMouseEnter={handleHover}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative z-10 px-6 py-3 md:px-10 md:py-5 font-bold text-lg md:text-2xl lg:text-3xl whitespace-nowrap">
            {word}
          </div>

          <motion.div
            className="absolute inset-0 bg-white rounded-[25px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.05 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {state === "visible" && (
            <motion.div
              className="absolute inset-0 border border-white/20 rounded-[25px]"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {state === "appearing" && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${20 + (i % 4) * 20}%`,
                    top: `${30 + Math.floor(i / 4) * 40}%`,
                  }}
                  initial={{
                    scale: 0,
                    opacity: 0,
                    rotate: 0,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 0.8, 0],
                    rotate: [0, 180],
                  }}
                  transition={{
                    duration: 1,
                    delay: delay + 0.3 + i * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}

              <motion.div
                className="absolute inset-0 border-2 border-white/30 rounded-[25px]"
                initial={{
                  scale: 0.8,
                  opacity: 0.6,
                }}
                animate={{
                  scale: [0.8, 1.5],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: delay + 0.2,
                  ease: "easeOut",
                }}
              />

              <motion.div
                className="absolute inset-0 bg-white rounded-[25px]"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 0.4,
                  delay: delay + 0.1,
                  ease: "easeInOut",
                }}
              />

              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`appear-particle-${i}`}
                  className="absolute w-1.5 h-1.5 bg-white/70 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 1,
                  }}
                  animate={{
                    x: Math.cos((i * 60 * Math.PI) / 180) * 60,
                    y: Math.sin((i * 60 * Math.PI) / 180) * 60,
                    scale: [0, 1, 0],
                    opacity: [1, 0.5, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: delay + 0.4,
                    ease: "easeOut",
                  }}
                />
              ))}
            </>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
