"use client";

// Packages
import { motion } from "framer-motion";

// Components
import Container from "@/components/Container";
import Title from "@/components/Title";
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import SliderUI from "../SliderUI";

export default function OpinionsUI({ locale, messages, path }) {
  const { data } = useFetchData({ endpoint: "opinions" });

  if (!data) {
    return null;
  }

  return (
    <Container boxTheme="py-12 bg-theme-blush-pink">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8 }}
        className="mb-12 text-center"
      >
        <Title theme="text-center bg-theme-dark-gray py-4 rounded-lg">
          {messages.menu.opinions}
        </Title>
      </motion.div>

      {path === "home" && (
        <SliderUI
          data={data}
          locale={locale}
          messages={messages}
          type="opinion"
        />
      )}

      {path === "home" && (
        <Link
          href="/opinions"
          className="bg-theme-dark-gray mt-12 block w-full rounded-lg py-4 text-center capitalize"
        >
          <Title>{messages.buttons.see_all}</Title>
        </Link>
      )}
    </Container>
  );
}
