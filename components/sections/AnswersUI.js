"use client";

// Packages
import { getTranslations } from "@/i18n";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";

// Components
import Container from "@/components/Container";
import Description from "../Description";
import Title from "../Title";

// Data
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";

export default function AnswersUI({ locale, messages, path }) {
  const t = getTranslations(messages);
  const [expandedId, setExpandedId] = useState(null);
  const { data } = useFetchData({ endpoint: "faqs" });

  if (!data) {
    return null;
  }

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
    <Container
      boxTheme="py-12 bg-theme-blush-pink"
      theme="flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
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
        className="mx-auto w-full space-y-4"
      >
        {(path === "home" ? data.data.slice(0, 10) : data.data).map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="bg-theme-dark-gray overflow-hidden rounded-lg transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(item.id)}
              className="group flex w-full cursor-pointer items-center justify-between p-6 text-left focus:outline-none"
            >
              <Title theme="pr-8 text-theme-pinkish-white">
                {item[`title_${locale}`]}
              </Title>
              <div className="bg-theme-bg-dark text-theme-pinkish-white flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
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
                  <div className="border-t border-white/5 px-6 pt-2 pb-6">
                    <Description theme="text-theme-pinkish-white leading-relaxed">
                      {item[`description_${locale}`]}
                    </Description>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
      {path === "home" && (
        <Link
          href="/questions"
          className="bg-theme-dark-gray mt-12 block w-full rounded-lg py-4 text-center capitalize"
        >
          <Title>{messages.buttons.see_all}</Title>
        </Link>
      )}
    </Container>
  );
}
