import React from "react";
import sora_bg from "@/images/text_section/pexels-sora.jpg";

const TextSection = () => {
  return (
    <div className="relative w-full h-[700px] sm:h-[800px] lg:h-[880px]">
      {/* Imagen de fondo */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={sora_bg.src}
        alt="sora background"
      />

      {/* Contenido sobre la imagen */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
        <div className="max-w-3xl text-white" data-aos="fade-up">
          {/* Título */}
          <h1 className="bg-black/70 text-2xl sm:text-3xl lg:text-4xl font-bold p-4 rounded mb-6 text-center">
            ¿Cuáles son los beneficios de Idún?
          </h1>

          {/* Lista de beneficios */}
          <ul className="space-y-4">
            {[
              "Los productos de Idún son de alta calidad, elaborados artesanalmente para el cuidado intensivo de la piel.",
              "El ingrediente principal es la naturaleza. Creamos productos artesanales para el cuidado del cuerpo y del planeta.",
              "Conocé las propiedades de nuestros jabones, shampoos sólidos y acondicionadores naturales.",
              "Sin químicos, sin sulfatos, sin petrolatos, zero waste y con respeto animal.",
            ].map((text, idx) => (
              <li
                key={idx}
                className="bg-black/70 text-white text-sm sm:text-base lg:text-lg font-light p-3 pl-6 rounded relative before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-green-500 before:rounded-full before:border before:border-green-600"
                data-aos="fade-up"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
