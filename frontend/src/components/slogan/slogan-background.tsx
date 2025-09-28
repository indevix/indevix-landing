"use client";
import { motion } from "motion/react";

interface SloganBackgroundProps {
  isInteracting: boolean;
  wordStates: Map<number, string>;
}

export default function SloganBackground({
  isInteracting,
  wordStates,
}: SloganBackgroundProps) {
  const activeWords = Array.from(wordStates.values()).filter(
    (state) =>
      state === "visible" || state === "destroying" || state === "assembling"
  ).length;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-white/[0.02] to-transparent rounded-full blur-3xl"
        animate={{
          scale: isInteracting ? [1, 1.2, 1] : [1, 1.1, 1],
          opacity: isInteracting ? [0.02, 0.04, 0.02] : [0.01, 0.02, 0.01],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-white/[0.015] to-transparent rounded-full blur-3xl"
        animate={{
          scale: isInteracting ? [1.1, 1, 1.1] : [1, 1.15, 1],
          opacity: isInteracting ? [0.015, 0.03, 0.015] : [0.01, 0.015, 0.01],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {activeWords > 1 && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`connection-${i}`}
              className="absolute left-1/2 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                width: 200 + i * 50,
                transformOrigin: "center",
              }}
              animate={{
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      )}

      {activeWords >= 3 && (
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/30 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {isInteracting && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.4, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}
