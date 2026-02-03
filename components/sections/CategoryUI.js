"use client";

import Image from "next/image";
import Container from "../Container";
import Title from "../Title";
import { motion } from "framer-motion";
import { data } from "@/data/remove/category";

export default function CategoryUI({ path, locale, messages }) {
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
    <Container boxTheme="py-12 bg-theme-pale-pink">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Title theme="text-center capitalize bg-theme-dark-gray py-4 rounded-lg">
          {messages.menu.category}
        </Title>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {data.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="h-96 rounded-t-lg overflow-hidden">
                <Image
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <Title theme="text-center bg-theme-dark-gray py-4 rounded-b-lg">
                {item.label}
              </Title>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
}
