"use client";

// Packages
import { motion } from "framer-motion";

// Components
import Container from "@/components/Container";
import Title from "@/components/Title";
import Link from "next/link";

// Hooks
import useFetchData from "@/hooks/useFetchData";
import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";

export default function BlogsUI({ locale, messages, path }) {
  const { data } = useFetchData({ endpoint: "blogs" });

  if (!data) {
    return null;
  }

  return (
    <Container boxTheme="bg-theme-blush-pink py-12">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8 }}
        className="mb-12 text-center"
      >
        <Title theme="text-center bg-theme-dark-gray py-4 rounded-lg">
          {messages.menu.blogs}
        </Title>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(path === "home" ? data.data.slice(0, 3) : data.data).map(
          (item, index) => {
            return (
              <Link
                href={`/blog/${item.slug}`}
                key={index}
              >
                <div className="relative h-96 overflow-hidden rounded-lg">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}uploads/${item.cover_image}`}
                    width={500}
                    height={500}
                    alt={item.title_en}
                    className="h-full w-full object-cover"
                  />
                  <div className="bg-theme-light-gray absolute bottom-0 left-0 flex w-full items-center justify-between p-2">
                    <Title theme="line-clamp-1">
                      {item[`title_${locale}`]}
                    </Title>
                    <PiArrowRight />
                  </div>
                </div>
              </Link>
            );
          },
        )}
      </div>
      {path === "home" && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
        >
          <Link
            href="/blogs"
            className="bg-theme-dark-gray mt-12 block w-full rounded-lg py-4 text-center capitalize"
          >
            <Title>{messages.buttons.see_all}</Title>
          </Link>
        </motion.div>
      )}
    </Container>
  );
}
