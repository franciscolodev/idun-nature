import React from "react";
import Image from "next/image";
import product_img01 from "@/images/products/product01.JPG";
import product_img02 from "@/images/products/product02.JPG";
import product_img03 from "@/images/products/product03.JPG";
import product_img04 from "@/images/products/product02.png";
import product_img05 from "@/images/products/product03.png";
import product_img06 from "@/images/products/product06.JPG";
import product_img07 from "@/images/products/product07.JPG";
import product_img08 from "@/images/products/product08.JPG";
import product_img09 from "@/images/products/product04.JPG";
import product_img10 from "@/images/products/product05.JPG";
import product_img11 from "@/images/products/product09.JPG";
import product_img12 from "@/images/products/product10.jpg";

const images = [
  product_img04,
  product_img05,
  product_img07,
  product_img08,
  product_img11,
  product_img12,
  product_img01,
  product_img10,
  product_img02,
  product_img09,
  product_img03,
  product_img06,
];

const Gallery: React.FC = () => {
  return (
    <section className="py-16 lg:py-32 bg-white" id="gallery">
      <h1 className="text-black text-2xl lg:text-4xl font-medium mb-16 text-center">
        - Algunos de nuestros productos -
      </h1>
      

      <div
        data-aos="fade-up"
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 place-items-center"
      >
        {images.map((img, index) => (
          <div key={index} className="w-full max-w-[160px] sm:max-w-sm aspect-[4/5] relative rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 focus-visible:scale-105 active:scale-95">
            <Image
              src={img}
              alt={`Producto ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 3}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
