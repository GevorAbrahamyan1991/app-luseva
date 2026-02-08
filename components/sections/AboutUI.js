"use client";

import useFetchData from "@/hooks/useFetchData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiWhatsappLogo,
} from "react-icons/pi";
import Container from "../Container";
import Description from "../Description";
import Loader from "../Loader";
import Title from "../Title";

export default function AboutUI({ path, locale, messages }) {
  const { data } = useFetchData({ endpoint: "about-home" });
  const { data: data2, isLoading } = useFetchData({ endpoint: "about" });

  if (path !== "home" && isLoading) {
    return <Loader />;
  }

  if (!data && !data2) {
    return null;
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

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container boxTheme="py-12 bg-theme-rose-pink">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8 }}
        className="mb-12 text-center"
      >
        <Title theme="text-center bg-theme-dark-gray py-4 rounded-lg">
          {messages.menu.about}
        </Title>
      </motion.div>
      {path === "home" && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=""
        >
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              className="h-fit overflow-hidden rounded-lg"
              variants={imageVariants}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}uploads/${data.cover_image}`}
                width={500}
                height={500}
                alt="Herro"
                className="w-full"
              />
            </motion.div>
            <motion.div
              variants={contentVariants}
              className="flex flex-col justify-between gap-4"
            >
              <Description
                dangerousContent={{ __html: data[`description_${locale}`] }}
              />
              <div>
                <Title>{messages.buttons.find_us}</Title>
                <div className="mt-4 flex gap-4">
                  <Link
                    href=""
                    className="bg-theme-blush-pink hover:bg-theme-dark-gray rounded-lg p-4 transition-all duration-300"
                  >
                    <PiInstagramLogo className="text-theme-pinkish-white hover:text-theme-rose-pink cursor-pointer text-xl transition-all duration-300 sm:text-2xl" />
                  </Link>
                  <Link
                    href=""
                    className="bg-theme-blush-pink hover:bg-theme-dark-gray rounded-lg p-4 transition-all duration-300"
                  >
                    <PiFacebookLogo className="text-theme-pinkish-white hover:text-theme-rose-pink cursor-pointer text-xl transition-all duration-300 sm:text-2xl" />
                  </Link>

                  <Link
                    href=""
                    className="bg-theme-blush-pink hover:bg-theme-dark-gray rounded-lg p-4 transition-all duration-300"
                  >
                    <PiWhatsappLogo className="text-theme-pinkish-white hover:text-theme-rose-pink cursor-pointer text-xl transition-all duration-300 sm:text-2xl" />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
                <Link
                  href=""
                  className="bg-theme-blush-pink hover:bg-theme-dark-gray rounded-lg py-2 text-center transition-all duration-300"
                >
                  <Title>{messages.buttons.call_us_now}</Title>
                </Link>
                <Link
                  href=""
                  className="bg-theme-blush-pink hover:bg-theme-dark-gray rounded-lg py-2 text-center transition-all duration-300"
                >
                  <Title>{messages.buttons.email_us_now}</Title>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </Container>
  );
}
