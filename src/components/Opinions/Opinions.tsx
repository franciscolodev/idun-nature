"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "@/components/Opinions/opinions_swiper.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  const Opinions = [
    {
      opinion_text:
        "Muy buena calidad en todos los productos que probé.",
      opinion_author: "Facundo",
    },
    {
      opinion_text:
        "Me ayudaron a mejorar la apariencia de mi piel. Recomiendo totalmente.",
      opinion_author: "Liliana",
    },
    {
      opinion_text:
        "Me encantan estos productos. Son naturales y me dejan la piel suave y fresca.",
      opinion_author: "Noelia",
    },
    {
      opinion_text:
        "Realmente me sorprendió la calidad. Me llegó en perfecto estado y en el tiempo indicado. Muy recomendable!",
      opinion_author: "Damián",
    },
    {
      opinion_text:
        "Me gustaría destacar la atención al cliente. Me ayudaron con todas mis dudas y me guiaron en la elección de los productos.",
      opinion_author: "Francisco",
    },
    {
      opinion_text:
        "Me encantan los jabones de Idún. Hidratan, huelen increíble y dejan la piel bien suave.",
      opinion_author: "Rosa",
    },
  ];

  return (
    <div className="bg-green-50 py-24" id="opinions">
      <h1 className="text-black text-2xl lg:text-4xl font-regular mt-16 text-center">
        - Opiniones -
      </h1>
      <Swiper
        className="relative opinions-swiper"
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
        direction="horizontal"
        effect="slide"
      >
        {Opinions.map((Opinion) => (
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-black italic text-sm lg:text-lg mb-2 w-[50vw] text-center">
                <span className="text-black text-3xl font-extrabold me-3">
                  ”
                </span>
                {Opinion.opinion_text}
              </p>
              <p className="italic text-xs lg:text-sm text-orange-600">
                ~ {Opinion.opinion_author}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
