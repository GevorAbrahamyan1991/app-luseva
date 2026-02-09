"use client";

// Packages
import { getTranslations } from "@/i18n";

import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import Container from "../Container";
import Title from "../Title";

export default function Footer({ messages, locale }) {
  const t = getTranslations(messages);
  const { data } = useFetchData({ endpoint: "category" });

  if (!data) {
    return null;
  }

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
      label: t("menu.categories"),
      href: "/category",
    },
    {
      label: t("menu.cakes"),
      href: "/cakes",
    },
    {
      label: t("menu.blogs"),
      href: "/blogs",
    },
    {
      label: t("menu.news"),
      href: "/news",
    },
    {
      label: t("menu.best_sellers"),
      href: "/best-sellers",
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

  return (
    <Container boxTheme="bg-theme-dark-gray py-8">
      <div className="grid gap-8 lg:grid-cols-4">
        <div className="col-span-2">
          <Title theme="bg-theme-rose-pink text-3xl! text-center rounded-lg py-2">
            {t("pages")}
          </Title>
          <div className="mt-8 grid grid-cols-1 gap-y-2 sm:grid-cols-2">
            {routes.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="lang-based-font-link text-theme-pinkish-white hover:text-theme-rose-pink after:bg-theme-dark-gray relative transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-span-2">
          <Title theme="bg-theme-rose-pink text-3xl! text-center rounded-lg py-2">
            {t("menu.categories")}
          </Title>
          <div className="mt-8 grid grid-cols-1 gap-y-2 sm:grid-cols-2">
            {data.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={`/category/${item.slug}`}
                  className="lang-based-font-link text-theme-pinkish-white hover:text-theme-rose-pink after:bg-theme-dark-gray relative transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item[`category_${locale}`]}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-theme-rose-pink mt-8 rounded-lg py-4 text-center">
        <Title theme="text-sm!">
          © 2012–2026 · <a href="gevorgabrahamyan.com">Gevorg Abrahamyan</a> ·
          All Rights Reserved
        </Title>
      </div>
    </Container>
  );
}
