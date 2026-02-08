import Image from "next/image";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import Title from "./Title";

export default function Card({ href, image, title, price, code }) {
  return (
    <div className="block overflow-hidden rounded-lg">
      <div className="relative h-96">
        <div className="bg-theme-dark-gray absolute top-0 left-0 px-4 py-2">
          <Title theme="text-base! text-theme-pinkish-white">{code}</Title>
        </div>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="bg-theme-light-gray p-2">
        <Title theme="line-clamp-1 text-theme-pinkish-white">{title}</Title>
      </div>
      <Link
        href={href}
        className="bg-theme-pale-pink flex items-center justify-between p-2"
      >
        <Title theme="text-theme-dark-gray">{price}</Title>
        <PiArrowRight size={30} />
      </Link>
    </div>
  );
}
