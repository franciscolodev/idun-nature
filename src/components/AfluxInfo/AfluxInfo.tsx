"use client";
import React from "react";
import hands_img from "@/images/aflux_info/idun1.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialButtons from "@/components/SocialButtons"; 
const AfluxInfo = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="flex bg-green-50 w-full justify-center">
      <div className="flex flex-col lg:flex-row container mx-xl py-16 lg:py-32 justify-center items-center">
        <div className="flex flex-col mx-16 mb-12 lg:m-0" data-aos="fade-right">
          <img
            className="flex rounded-full"
            src={hands_img.src}
            alt="hands img"
            width={540}
            height={540}
          />
        </div>
        <div className="flex flex-col mx-8 lg:ml-16" data-aos="fade-up">
          <h1 className="text-4xl lg:text-5xl mb-8 text-black">
            <span className="flex text-black mb-[-12px]">Idún</span>
            <span className="inline-flex text-2xl lg:text-3xl font-light text-black">
              - Cosmética natural y sin tóxicos
            </span>
          </h1>
          
          <p className="text-black text-sm lg:text-lg mb-8">
            Jabones artesanales, shampoo sólido y más <br></br>
            Hechos con activos que nutren, limpian y equilibran tu piel.
          </p>
          <h2 className="text-black text-xl lg:text-2xl">
            ¿Qué distingue a nuestros productos?
          </h2>
          <ul className="my-4 pl-4">
            <li className="text-black text-sm lg:text-lg relative my-2 before:inline-block before:mb-[2px] lg:before:mb-0 before:w-2 before:h-2 lg:before:w-3 lg:before:h-3 before:mr-3 lg:before:mr-4 before:bg-green-500 before:rounded-full before:border before:border-green-600 w-full lg:w-2/3">
              Fórmula rica en ingredientes
            </li>
            <li className="text-black text-sm lg:text-lg relative my-2 before:inline-block before:mb-[2px] lg:before:mb-0 before:w-2 before:h-2 lg:before:w-3 lg:before:h-3 before:mr-3 lg:before:mr-4 before:bg-green-500 before:rounded-full before:border before:border-green-600 w-full lg:w-2/3">
              Nutrientes de origen natural
            </li>
            <li className="text-black text-sm lg:text-lg relative my-2 before:inline-block before:mb-[2px] lg:before:mb-0 before:w-2 before:h-2 lg:before:w-3 lg:before:h-3 before:mr-3 lg:before:mr-4 before:bg-green-500 before:rounded-full before:border before:border-green-600 w-full lg:w-2/3">
              Sin químicos, sin sulfatos, sin petrolatos, zero waste y con respeto animal.
            </li>
          </ul>
            <h2 className="text-black text-xl lg:text-2xl">
            ¡Hacé tu pedido acá!
          </h2>
          <SocialButtons className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default AfluxInfo;
