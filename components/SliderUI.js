// Packages
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Assets
import { PiStarFill } from "react-icons/pi";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "./Card";
import Description from "./Description";
import Title from "./Title";

export default function SliderUI({ data, locale, messages, type }) {
  return (
    <div>
      {data && (
        <Swiper
          className="!pb-16"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={true}
          // navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          style={{
            "--swiper-navigation-color": "red",
          }}
        >
          {data.map((item, index) => {
            const desc = item[`description_${locale}`];
            return (
              <SwiperSlide
                key={index}
                className=""
              >
                {type === "product" && (
                  <Card
                    href={`/products/${item.slug}`}
                    image={`${process.env.NEXT_PUBLIC_URL}uploads/${item.cover_image}`}
                    title={item[`title_${locale}`]}
                    price={item.price_shown}
                    code={item.code}
                  />
                )}
                {type === "opinion" && (
                  <div className="bg-theme-light-gray h-48 rounded-lg p-4">
                    <div>
                      <Title
                        theme="text-theme-rose-pink mb-2"
                        keys={item[`title_${locale}`]}
                      >
                        {item[`title_${locale}`]}
                      </Title>
                      <div className="flex items-center gap-1">
                        <PiStarFill className="text-theme-rose-pink" />
                        <PiStarFill className="text-theme-rose-pink" />
                        <PiStarFill className="text-theme-rose-pink" />
                        <PiStarFill className="text-theme-rose-pink" />
                        <PiStarFill className="text-theme-rose-pink" />
                      </div>
                      <Description
                        dangerousContent={{ __html: desc }}
                        theme={`mt-2 overflow-hidden text-justify text-text-light mt-4`}
                      />
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}
