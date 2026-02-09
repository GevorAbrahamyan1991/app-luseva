"use client";

// Packages
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaViber } from "react-icons/fa";
import {
  PiClock,
  PiFacebookLogo,
  PiInstagramLogo,
  PiPhone,
  PiTelegramLogo,
  PiWhatsappLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

// Components
import Container from "@/components/Container";
import Description from "../Description";
import Title from "../Title";

// Hooks
import useFetchData from "@/hooks/useFetchData";

export default function ContactUI({ path, locale, messages }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const { data } = useFetchData({ endpoint: "contact" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
          setStatus("error");
        },
      );
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 8000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  if (!data) {
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
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Title theme="text-center bg-theme-dark-gray py-4 rounded-lg">
          {messages.menu.contact}
        </Title>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-theme-dark-gray mt-12 grid grid-cols-1 gap-8 rounded-lg p-4 sm:p-8 lg:grid-cols-2"
      >
        <motion.div
          className="flex h-full flex-col justify-between gap-y-8"
          variants={imageVariants}
        >
          <Title theme="text-base! bg-theme-blush-pink! p-4 rounded-lg">
            Պատրաստ ենք քննարկել Ձեր տոնական տորթի յուրաքանչյուր մանրուքը։
            Կապվեք մեզ հետ՝ Ձեր քաղցր երազանքն իրականություն դարձնելու համար
          </Title>
          <div className="grid grid-cols-1 gap-y-4">
            {data.phone1 && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Link
                  href={"tel:" + data.phone1}
                  className="bg-theme-blush-pink hover:bg-theme-rose-pink hover:text-theme-dark-gray flex w-full items-center gap-x-4 rounded-lg p-4 transition-all duration-300"
                >
                  <PiPhone size={28} />
                  <Title>{data.phone1}</Title>
                </Link>
              </motion.div>
            )}
            {data.phone2 && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Link
                  href={"tel:" + data.phone2}
                  className="bg-theme-blush-pink hover:bg-theme-rose-pink hover:text-theme-dark-gray flex w-full items-center gap-x-4 rounded-lg p-4 transition-all duration-300"
                >
                  <PiPhone size={28} />
                  <Title>{data.phone2}</Title>
                </Link>
              </motion.div>
            )}
            {data.email && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Link
                  href={`mailto:${data.email}`}
                  className="bg-theme-blush-pink hover:bg-theme-rose-pink hover:text-theme-dark-gray flex w-full items-center gap-x-4 rounded-lg p-4 transition-all duration-300"
                >
                  <PiPhone size={28} />
                  <Title>{data.email}</Title>
                </Link>
              </motion.div>
            )}
            {data.working_hours_am && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-theme-blush-pink hover:bg-theme-rose-pink hover:text-theme-dark-gray flex w-full items-center gap-x-4 rounded-lg p-4 transition-all duration-300">
                  <PiClock size={28} />
                  <Description
                    theme="font-semibold"
                    dangerousContent={{
                      __html: data[`working_hours_${locale}`],
                    }}
                  />
                </div>
              </motion.div>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 sm:gap-4"
          >
            {data.instagram && (
              <Link
                href={data.instagram}
                target="_blank"
                className="bg-theme-blush-pink hover:bg-theme-rose-pink hover:text-theme-dark-gray flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 sm:h-16 sm:w-16"
              >
                <PiInstagramLogo className="text-base sm:text-3xl" />
              </Link>
            )}
            {data.facebook && (
              <Link
                href={data.facebook}
                target="_blank"
                className="bg-theme-blush-pink hover:bg-theme-rose-pink hover:text-theme-dark-gray flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 sm:h-16 sm:w-16"
              >
                <PiFacebookLogo className="text-base sm:text-3xl" />
              </Link>
            )}
            {data.youtube && (
              <Link
                href={data.youtube}
                target="_blank"
                className="bg-theme-blush-pink hover:bg-theme-rose-pink hover:text-theme-dark-gray flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 sm:h-16 sm:w-16"
              >
                <PiYoutubeLogo className="text-base sm:text-3xl" />
              </Link>
            )}
            {data.whatsapp && (
              <Link
                href={data.whatsapp}
                target="_blank"
                className="bg-theme-blush-pink hover:bg-theme-rose-pink hover:text-theme-dark-gray flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 sm:h-16 sm:w-16"
              >
                <PiWhatsappLogo className="text-base sm:text-3xl" />
              </Link>
            )}
            {data.viber && (
              <Link
                href={data.viber}
                target="_blank"
                className="bg-theme-blush-pink hover:bg-theme-rose-pink hover:text-theme-dark-gray flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 sm:h-16 sm:w-16"
              >
                <FaViber className="text-base sm:text-3xl" />
              </Link>
            )}
            {data.telegram && (
              <Link
                href={data.telegram}
                target="_blank"
                className="bg-theme-blush-pink hover:bg-theme-rose-pink hover:text-theme-dark-gray flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 sm:h-16 sm:w-16"
              >
                <PiTelegramLogo className="text-base sm:text-3xl" />
              </Link>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          variants={contentVariants}
          className="flex flex-col justify-between gap-4"
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="grid grid-cols-1 gap-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="text-theme-rose-pink lang-based-font-link mb-4 block"
              >
                {messages.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border-theme-rose-pink text-theme-rose-pink lang-based-font block w-full rounded-md border px-3 py-2 text-lg outline-none focus:border-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-theme-rose-pink lang-based-font-link mb-4 block"
              >
                {messages.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border-theme-rose-pink text-theme-rose-pink lang-based-font block w-full rounded-md border px-3 py-2 text-lg outline-none focus:border-2"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-theme-rose-pink lang-based-font-link mb-4 block"
              >
                {messages.phone}
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                className="border-theme-rose-pink text-theme-rose-pink lang-based-font block w-full rounded-md border px-3 py-2 text-lg outline-none focus:border-2"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-theme-rose-pink lang-based-font-link mb-4 block"
              >
                {messages.message}
              </label>
              <textarea
                rows="4"
                id="message"
                name="message"
                required
                className="border-theme-rose-pink text-theme-rose-pink lang-based-font block w-full rounded-md border px-3 py-2 text-lg outline-none focus:border-2"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-theme-rose-pink text-theme-rich-black lang-based-font-link flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg px-2 py-4 text-center text-xl font-bold tracking-wider transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50 sm:text-left"
            >
              {loading ? messages.sending : messages.send}
            </button>
            {status === "success" && (
              <Title style="text-green-600 mt-2">
                {t("message_sent_success")}
              </Title>
            )}
            {status === "error" && (
              <Title style="theme-rose-pink-600 mt-2">
                {messages.message_sent_error}
              </Title>
            )}
          </form>
        </motion.div>
      </motion.div>
    </Container>
  );
}
