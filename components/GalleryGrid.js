"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryGrid({ data, currentCss }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`${
          currentCss
            ? currentCss
            : "grid cursor-pointer grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-2"
        }`}
      >
        {data.map((e, i) => {
          return (
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}uploads/${e.gallery_images}`}
              alt="Images"
              onClick={() => setOpen(true)}
              className="h-full w-full cursor-zoom-in rounded-lg object-cover"
              key={i}
              priority
              width={400}
              height={400}
            />
          );
        })}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={data.map((url) => ({
            src: `${process.env.NEXT_PUBLIC_URL}uploads/${url.gallery_images}`,
          }))}
        />
      </div>
    </>
  );
}
