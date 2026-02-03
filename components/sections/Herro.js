"use client";

import Image from "next/image";
import Container from "../Container";
import Title from "../Title";
import Description from "../Description";
import Link from "next/link";
import Loader from "../Loader";
import useFetchData from "@/hooks/useFetchData";

export default function Herro({ locale, messages }) {
  const { data, isLoading } = useFetchData({ endpoint: "herro" });

  if (isLoading) {
    return <Loader messages={messages} />;
  }

  if (!data) {
    return null;
  }

  return (
    <Container boxTheme="xl:h-[calc(100vh-76px)] max-xl:py-12 bg-theme-pale-pink flex items-center">
      <div className="flex max-xl:flex-col justify-between items-center gap-8">
        <div className="w-full xl:w-1/2 xl:h-[calc(100vh-180px)] flex flex-col max-xl:gap-y-8 justify-between">
          <div className="bg-theme-blush-pink rounded-lg w-full px-2 py-4">
            <Title as={"h1"} theme="text-center font-bold tracking-widest">
              {messages.metadata.slogan}
            </Title>
          </div>
          <div>
            <Description
              theme="text-black text-xl  tracking-widest lang-based-font-link"
              dangerousContent={{ __html: data[`title_${locale}`] }}
            />
          </div>
          <div>
            <Description
              theme="text-xl"
              dangerousContent={{ __html: data[`description_${locale}`] }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <Link
              href=""
              className="bg-theme-blush-pink hover:bg-theme-dark-gray transition-all duration-300 rounded-lg py-2 text-center"
            >
              <Title>{messages.buttons.call_us_now}</Title>
            </Link>
            <Link
              href=""
              className="bg-theme-blush-pink hover:bg-theme-dark-gray transition-all duration-300 rounded-lg py-2 text-center"
            >
              <Title>{messages.buttons.email_us_now}</Title>
            </Link>
          </div>
        </div>
        <div className="w-full xl:w-1/2 xl:h-[calc(100vh-180px)] rounded-lg overflow-hidden">
          <Image
            src="/remove/herro.png"
            width={500}
            height={500}
            alt="Herro"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
