"use client";

import useFetchData from "@/hooks/useFetchData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiWhatsappLogo,
} from "react-icons/pi";
import ReactPlayer from "react-player";
import Breadcrumb from "../Breadcrumb";
import Container from "../Container";
import Description from "../Description";
import GalleryGrid from "../GalleryGrid";
import Loader from "../Loader";
import Title from "../Title";

export default function AboutUI({ path, locale, messages }) {
  const { data } = useFetchData({ endpoint: "about-home" });
  const { data: data2, isLoading } = useFetchData({ endpoint: "about" });

  const { data: images, isLoading: imagesLoading } = useFetchData({
    endpoint: `about-images`,
  });

  const GalleryImages = useMemo(() => {
    if (!data2 || !images) return [];
    return images.filter((item) => item.about_id == data2?.id);
  }, [data2, images]);

  if (path !== "home" && isLoading) {
    return <Loader messages={messages} />;
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
    <>
      {path !== "home" && (
        <Breadcrumb
          messages={messages}
          locale={locale}
          backgroundImage={`${process.env.NEXT_PUBLIC_URL}uploads/${data2?.cover_image}`}
          urls={[
            {
              url: "/about",
              label: `${messages.menu.about}`,
            },
          ]}
        />
      )}
      <Container boxTheme="py-12 bg-theme-rose-pink">
        {path === "home" && (
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
        )}
        {path !== "home" && (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className=""
            >
              <motion.div
                className="overflow-hidden"
                // variants={contentVariants}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8 }}
              >
                <Description
                  theme="text-lg [&_h2]:text-theme-pinkish-white text-theme-light-gray"
                  dangerousContent={{ __html: data2[`description_${locale}`] }}
                />
              </motion.div>
              {data2.video && (
                <motion.div
                  className="mt-12 overflow-hidden rounded-lg"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8 }}
                >
                  <ReactPlayer
                    controls
                    className="!aspect-[16/9] !h-full !w-full !object-cover"
                    src={`https://www.youtube.com/watch?v=${data2?.video}`}
                  />
                </motion.div>
              )}

              {GalleryImages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8 }}
                  className="mt-12"
                >
                  <GalleryGrid
                    data={GalleryImages}
                    currentCss="grid cursor-pointer grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-8 md:grid-cols-4"
                  />
                </motion.div>
              )}
            </motion.div>
          </>
        )}
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
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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
    </>
  );
}
