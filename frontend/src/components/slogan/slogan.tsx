"use client";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function Slogan() {
  const t = useTranslations("Slogan");

  return (
    <article
      id="team"
      className="container mx-auto px-[15px] py-20 flex flex-col items-center gap-16 relative overflow-hidden"
    >
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/3 rounded-full blur-lg"></div>
      </div>

      <div className="w-full flex flex-col gap-[10px] text-center">
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

      <section className="relative flex flex-wrap justify-center items-center gap-3 md:gap-5 max-w-6xl">
        {/* Первый блок: "Мы" */}
        <motion.div
          className="relative group bg-gradient-to-br from-foreground to-foreground/90 text-background px-6 py-3 md:px-10 md:py-5 rounded-[25px] font-bold text-lg md:text-2xl lg:text-3xl whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            y: -5,
            rotateX: 5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">Мы</span>
        </motion.div>

        {/* Второй блок: "превращаем" */}
        <motion.div
          className="relative group bg-gradient-to-br from-primary to-primary/90 text-primary-foreground px-6 py-3 md:px-10 md:py-5 rounded-[25px] font-bold text-lg md:text-2xl lg:text-3xl whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            y: -5,
            rotateX: 5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">превращаем</span>
        </motion.div>

        {/* Третий блок: "идеи" */}
        <motion.div
          className="relative group bg-gradient-to-br from-accent to-accent/90 text-accent-foreground px-6 py-3 md:px-10 md:py-5 rounded-[25px] font-bold text-lg md:text-2xl lg:text-3xl whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            y: -5,
            rotateX: 5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">идеи</span>
        </motion.div>

        {/* Четвертый блок: "в готовые" */}
        <motion.div
          className="relative group bg-gradient-to-br from-foreground to-foreground/90 text-background px-6 py-3 md:px-10 md:py-5 rounded-[25px] font-bold text-lg md:text-2xl lg:text-3xl whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7, type: "spring", bounce: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            y: -5,
            rotateX: 5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">в готовые</span>
        </motion.div>

        {/* Пятый блок: "решения" */}
        <motion.div
          className="relative group bg-gradient-to-br from-primary to-accent text-primary-foreground px-6 py-3 md:px-10 md:py-5 rounded-[25px] font-bold text-lg md:text-2xl lg:text-3xl whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring", bounce: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            y: -5,
            rotateX: 5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">решения</span>
        </motion.div>

        {/* Плавающие декоративные элементы */}
        <motion.div
          className="absolute -top-8 -left-8 w-4 h-4 bg-primary/30 rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute -bottom-8 -right-8 w-6 h-6 bg-accent/30 rounded-full"
          animate={{
            y: [0, 10, 0],
            x: [0, 5, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/2 -right-12 w-3 h-3 bg-primary/40 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </section>
    </article>
  );
}
