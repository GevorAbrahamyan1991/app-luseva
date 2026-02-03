"use client";

import { PiCheck } from "react-icons/pi";
import Container from "../Container";
import Title from "../Title";
import { data } from "@/data/remove/why";
import Description from "../Description";
import { motion } from "framer-motion";

export default function Features({ locale, messages }) {
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
    <Container boxTheme="py-12 bg-theme-blush-pink">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Title theme="text-center bg-theme-dark-gray py-4 rounded-lg">
          {messages.menu.features}
        </Title>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {data.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-theme-light-gray p-2 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div>
                  <PiCheck size={30} />
                </div>
                <div>
                  <Title>{item.title}</Title>
                </div>
              </div>
              <div>
                <Description>{item.description}</Description>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
}
