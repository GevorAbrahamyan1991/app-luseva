"use client";

import { motion } from "framer-motion";

export default function Loader({ messages }) {
  const text = `${messages.metadata.title}`;
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "anticipate",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "anticipate",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-theme-rose-pink"
    >
      <motion.div
        className="flex overflow-hidden text-2xl md:text-5xl! lang-based-font-link  font-semibold theme-pinkish-white tracking-tighter"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span
            variants={child}
            key={index}
            className={letter === " " ? "mr-4" : "tracking-widest py-4"}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
