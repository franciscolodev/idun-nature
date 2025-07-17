"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "@/components/Hero/hero_swiper.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img01 from "@/images/hero/pexels-hero-01.jpg";
import img02 from "@/images/hero/pexels-hero-02.jpg";
import img03 from "@/images/hero/pexels-hero-03.jpg";

export default () => {
  return (
    <Swiper
      id="start"
      className="relative h-screen"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      direction="vertical"
      effect="slide"
    >
      <SwiperSlide>
        <img
          className="h-screen w-screen object-cover select-none object-bottom lg:object-center"
          src={img01.src}
          alt="img"
        />
        <div className="absolute bottom-[5vh] lg:bottom-[10vw] left-[10vw] z-1">
          <h1 className="inline-block px-2 rounded bg-black/70 text-[#FFF] text-2xl lg:text-7xl mb-5 lg:w-[625px] leading-tight font-semibold">
            Una combinación natural única
          </h1>
          <p className="px-2 rounded bg-black/70 text-white text-sm lg:text-xl mb-5 w-4/5 lg:w-[535px] font-extralight">
            Ocupate del bienestar de tu piel con nuestros productos.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-screen w-screen object-cover select-none"
          src={img02.src}
          alt="img"
        />
        <div className="absolute bottom-[5vh] lg:bottom-[10vw] left-[10vw] z-1">
          <h1 className="inline-block px-2 rounded bg-black/70 text-[#FFF] text-2xl lg:text-7xl mb-5 lg:w-[730px] leading-tight font-semibold">
            Efectos asombrosos
          </h1>
          <p className="px-2 rounded bg-black/70 text-[#FFF] text-sm lg:text-xl mb-5 w-4/5 lg:w-[200px] font-extralight">
            ¡Notá los cambios!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-screen w-screen object-cover select-none"
          src={img03.src}
          alt="img"
        />
        <div className="absolute bottom-[5vh] lg:bottom-[10vw] left-[10vw] z-1">
          <h1 className="inline-block px-2 rounded bg-black/70 text-[#FFF] text-2xl lg:text-7xl mb-5 lg:w-[640px] leading-tight font-semibold">
            Productos para cada tipo de piel
          </h1>
          <p className="px-2 rounded bg-black/70 text-[#FFF] text-sm lg:text-xl mb-5 w-4/5 lg:w-[350px] font-extralight">
            Encontrá lo que tu cuerpo necesita. Productos con distintas propiedades
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
