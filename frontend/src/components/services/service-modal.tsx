"use client";

import { ProjectTags } from "@components/tags";
import { Button } from "@ui/button";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { Service } from "@/types/service.types";

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  const t = useTranslations("Shared");
  const s = useTranslations("Services");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !service) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative bg-card border border-border rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-hide"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              type: "spring" as const,
              duration: 0.5,
              bounce: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} className="text-muted-foreground" />
            </motion.button>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {service.title}
              </h2>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <ProjectTags tags={service.tags} />
              </motion.div>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {t("description")}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {service.description}
              </p>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {s("subtitle")}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-muted-foreground">
                    {t("from")}
                  </span>
                  <span className="text-3xl font-bold text-primary">
                    {service.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {s("description")}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full py-3 px-6" size="lg">
                  {s("order_service")}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot
  );
}
