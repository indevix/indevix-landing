"use client";

import { STACK_META } from "@/config/stack-meta";
import { StackCard } from "./stack-card";
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";

export function StackScroller() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  const duplicatedStack = useMemo(() => [...STACK_META, ...STACK_META], []);

  const handleCardClick = (index: number) => {
    const originalIndex = index % STACK_META.length;
    setActiveIndex((prevIndex) =>
      prevIndex === originalIndex ? null : originalIndex,
    );
  };

  return (
    <div className="w-full overflow-hidden relative group">
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-4 pr-4 flex-nowrap"
        animate={{ x: "-50%" }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
          repeatType: "loop",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedStack.map((item, index) => {
          const originalIndex = index % STACK_META.length;

          const showName =
            activeIndex === originalIndex ||
            (!isTouchDevice && activeIndex === null && hoveredIndex === index);

          return (
            <StackCard
              key={index}
              {...item}
              showName={showName}
              onMouseEnter={() => !isTouchDevice && setHoveredIndex(index)}
              onMouseLeave={() => !isTouchDevice && setHoveredIndex(null)}
              onClick={() => handleCardClick(index)}
            />
          );
        })}
      </motion.div>

      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
}
