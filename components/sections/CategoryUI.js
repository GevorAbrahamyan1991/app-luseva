import Image from "next/image";
import Container from "../Container";
import Title from "../Title";

import { data } from "@/data/remove/category";

export default async function CategoryUI({ path, locale, messages }) {
  return (
    <Container boxTheme="py-12 bg-theme-pale-pink">
      <Title theme="text-center capitalize bg-theme-dark-gray py-4 rounded-lg">
        {messages.menu.category}
      </Title>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className="h-96 rounded-t-lg overflow-hidden">
                <Image
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <Title theme="text-center bg-theme-dark-gray py-4 rounded-b-lg">
                {item.label}
              </Title>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
