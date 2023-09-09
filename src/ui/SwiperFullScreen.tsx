"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperFullScreen = () => {
  const images = [
    { src: "/slide1.jpg", alt: "slide 1" },
    { src: "/slide2.jpg", alt: "slide 2" },
    { src: "/slide3.png", alt: "slide 2" },
  ];
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-2"
    >
      {images.map((image) => (
        <SwiperSlide
          key={image.src}
          className="w-full h-7"
          style={{ width: "100%", height: "200px" }}
        >
          <Image
            className="w-full h-7"
            src={image.src}
            width={500}
            height={600}
            alt={image.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperFullScreen;
