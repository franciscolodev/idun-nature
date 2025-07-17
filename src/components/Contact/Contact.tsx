import React from "react";

import "@/components/Contact/contact.scss";

const Contact = () => {
  return (
    <div className="flex bg-green-50 w-full justify-center" id="contact">
      <div className="flex flex-col container mx-xl lg:py-24 justify-center items-center">
        <h1 className="text-black font-regular text-center text-2xl lg:text-4xl mt-12 mb-12 lg:mb-20 lg:mt-0">
          - Contacto -
        </h1>
        <div className="relative flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="flex flex-col border-4 border-[#b07441] w-full me-0 lg:me-8 h-[200px] px-4 lg:px-12 items-start justify-center shadow-inner">
            <p className="mb-2">
              <strong className="text-black me-4 font-extrabold">
                E-mail:
              </strong>
              <a
                className="text-black hover:text-[#5b6f38] text-sm"
                href="mailto:bioidun@gmail.com"
              >
                bioidun@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <strong className="text-black me-4 font-extrabold">Tel.:</strong>
              <a
                className="text-black hover:text-[#5b6f38] text-sm"
                href="http://bit.ly/40VXrUT"
              >
                Click acá              </a>
            </p>
          </div>
        <div className="flex flex-col">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53462.672580446575!2d-64.3421894!3d-33.1244068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2000fbdd02247%3A0xc58d0a705d7cc0e3!2zUsOtbyBDdWFydG8sIEPDs3Jkb2Jh!5e0!3m2!1ses!2sar!4v1750740354358!5m2!1ses!2sar"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
