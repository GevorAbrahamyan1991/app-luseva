"use client";

// Packages
import { getTranslations } from "@/i18n";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  PiFacebookLogo,
  PiGlobe,
  PiHeart,
  PiInstagramLogo,
  PiList,
  PiPhone,
  PiWhatsappLogo,
} from "react-icons/pi";

// Components
import Container from "../Container";

export default function Header({ messages, locale }) {
  const t = getTranslations(messages);
  const [open, setOpen] = useState(false);

  const routes = [
    {
      label: t("menu.home"),
      href: "/",
    },
    {
      label: t("menu.about"),
      href: "/about-us",
    },
    {
      label: t("menu.cakes"),
      href: "/cakes",
    },
    {
      label: t("menu.opinions"),
      href: "/opinions",
    },
    {
      label: t("menu.faqs"),
      href: "/faqs",
    },
    {
      label: t("menu.contact"),
      href: "/contact",
    },
  ];

  const socialIcons = () => (
    <div className="flex gap-2">
      <PiInstagramLogo className="cursor-pointer text-xl sm:text-2xl text-theme-pinkish-white hover:text-theme-rose-pink transition-all duration-300" />
      <PiFacebookLogo className="cursor-pointer text-xl sm:text-2xl text-theme-pinkish-white hover:text-theme-rose-pink transition-all duration-300" />
      <PiPhone className="cursor-pointer text-xl sm:text-2xl text-theme-pinkish-white hover:text-theme-rose-pink transition-all duration-300" />
      <PiWhatsappLogo className="cursor-pointer text-xl sm:text-2xl text-theme-pinkish-white hover:text-theme-rose-pink transition-all duration-300" />
      <PiHeart className="cursor-pointer text-xl sm:text-2xl text-theme-pinkish-white hover:text-theme-rose-pink transition-all duration-300" />
      <PiGlobe className="cursor-pointer text-xl sm:text-2xl text-theme-pinkish-white hover:text-theme-rose-pink transition-all duration-300" />
    </div>
  );

  return (
    <>
      <Container
        boxTheme="max-lg:hidden overflow-hidden bg-theme-dark-gray"
        theme="flex items-center py-3"
      >
        <div className="w-1/6">
          <Link href="/">
            <Image
              src="/logo-removebg-preview.png"
              alt="Logo"
              width={120}
              height={60}
              priority
            />
          </Link>
        </div>
        <div className="flex w-4/6 justify-center gap-8">
          {routes.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="lang-based-font-link text-theme-pinkish-white hover:text-theme-rose-pink after:bg-theme-dark-gray relative transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex w-1/6 justify-end gap-2">{socialIcons()}</div>
      </Container>
      <Container boxTheme="lg:hidden bg-theme-dark-gray" theme="py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo-removebg-preview.png"
              alt="Logo"
              width={80}
              height={60}
              priority
            />
          </Link>
          <div>{socialIcons()}</div>
          <button>
            <PiList
              className="cursor-pointer text-xl sm:text-2xl text-theme-pinkish-white"
              onClick={() => setOpen(!open)}
            />
          </button>
        </div>
        <div
          className={`${
            open ? "h-72" : "h-0"
          } flex flex-col justify-center space-y-3 overflow-hidden transition-all duration-300`}
        >
          {routes.map((item, index) => {
            return (
              <Link
                href={item.href}
                key={index}
                className="lang-based-font-link text-theme-pinkish-white"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </Container>
    </>
  );
}
