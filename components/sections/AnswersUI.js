"use client";

// Packages
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTranslations } from "@/i18n";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";

// Components
import Container from "@/components/Container";
import Title from "../Title";
import Description from "../Description";

// Data
import { faqServices } from "@/data/remove/answers";

export default function AnswersUI({ locale, messages, path }) {
  const t = getTranslations(messages);
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container boxTheme="py-12 bg-theme-blush-pink" theme="flex-col">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <Title theme="bg-theme-dark-gray py-4 rounded-lg  text-center">
          {t("menu.faqs")}
        </Title>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" mx-auto w-full space-y-4"
      >
        {faqServices.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="rounded-lg overflow-hidden  bg-theme-dark-gray transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none group cursor-pointer"
            >
              <Title theme="pr-8 text-theme-pinkish-white">
                {item.question[locale]}
              </Title>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-theme-bg-dark flex items-center justify-center text-theme-pinkish-white group-hover:scale-110 transition-transform duration-300">
                {expandedId === item.id ? (
                  <PiMinusBold size={20} />
                ) : (
                  <PiPlusBold size={20} />
                )}
              </div>
            </button>

            <AnimatePresence>
              {expandedId === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-white/5">
                    <Description theme="text-theme-pinkish-white leading-relaxed">
                      {item.answer[locale]}
                    </Description>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
