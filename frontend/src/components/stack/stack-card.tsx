"use client";

import { TechItem } from "@/config/stack-meta";
import { motion, AnimatePresence } from "framer-motion";

interface StackCardProps extends TechItem {
  showName: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export function StackCard({
  name,
  Icon,
  showName,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: StackCardProps) {
  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div
      className="relative flex items-center justify-center min-w-[150px] min-h-[150px] bg-white/5 border border-white/10 rounded-lg cursor-pointer group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <AnimatePresence initial={false} mode="wait">
        {!showName ? (
          <motion.div
            key="icon"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center p-2"
          >
            <Icon
              className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors duration-300"
              p-2
            />
          </motion.div>
        ) : (
          <motion.div
            key="name"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center p-1"
          >
            <p className="font-medium text-xs text-white text-center leading-tight">
              {name}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
