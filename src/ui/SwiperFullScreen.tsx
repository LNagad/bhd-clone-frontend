"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

const SwiperFullScreen = () => {

  const images = [
    { src: "/slide1.jpg", alt: "slide 1" },
    { src: "/slide2.jpg", alt: "slide 2" },
    { src: "/slide3.png", alt: "slide 2" },
  ];

  return (
    <Swiper
      // breakpoints={breakpoints}
      autoplay={{ delay: 4500, disableOnInteraction: true }}
      pagination={{ clickable: true }}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-52 sm:h-96 md:h-[400px] lg:h-[420px] xl:h-[430px] 2xl:h-[450px]"

    >
      {images.map((image) => (
        <SwiperSlide key={image.src}>
          <Image
            className="w-full object-cover h-full" //xs:object-fill sm:object-cover
            src={image.src}
            width={1500}
            height={1600}
            alt={image.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperFullScreen;
