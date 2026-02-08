"use client";

import useFetchData from "@/hooks/useFetchData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import Loader from "../Loader";
import Title from "../Title";

export default function CategoryUI({ path, locale, messages }) {
  const { data, isLoading } = useFetchData({ endpoint: "category" });

  if (!data) {
    return null;
  }

  if (isLoading && path !== "home") {
    return <Loader />;
  }

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
        className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {(path === "home" ? data.slice(0, 6) : data).map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
            >
              <Link href={`/category/${item.slug}`}>
                <div className="h-96 overflow-hidden rounded-t-lg">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}uploads/${item.cover_image}`}
                    width={500}
                    height={500}
                    alt={item.category_en}
                    className="h-full w-full object-cover"
                  />
                </div>
                <Title theme="text-center bg-theme-dark-gray py-4 rounded-b-lg">
                  {item[`category_${locale}`]}
                </Title>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {path === "home" && (
        <Link
          href="/category"
          className="bg-theme-dark-gray mt-12 block w-full rounded-lg py-4 text-center capitalize"
        >
          <Title>{messages.buttons.see_all}</Title>
        </Link>
      )}
    </Container>
  );
}
