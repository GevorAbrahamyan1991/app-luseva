"use client";

import useFetchData from "@/hooks/useFetchData";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import Description from "../Description";
import Loader from "../Loader";
import Title from "../Title";

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
      <div className="flex items-center justify-between gap-8 max-xl:flex-col">
        <div className="flex w-full flex-col justify-between max-xl:gap-y-8 xl:h-[calc(100vh-180px)] xl:w-1/2">
          <div className="bg-theme-blush-pink w-full rounded-lg px-2 py-4">
            <Title
              as={"h1"}
              theme="text-center font-bold tracking-widest"
            >
              {data[`slogan_${locale}`]}
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
        </div>
        <div className="w-full overflow-hidden rounded-lg xl:h-[calc(100vh-180px)] xl:w-1/2">
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}uploads/${data.cover_image}`}
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
