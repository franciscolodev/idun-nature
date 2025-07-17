import { Instagram } from "lucide-react";
import React from "react";

/**
 * Ícono de WhatsApp como SVG. Usa currentColor para heredar color del texto.
 */
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
<svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
>
    <path d="M12 0C5.372 0 0 5.372 0 12c0 2.123.555 4.148 1.604 5.948L0 24l6.197-1.602A11.93 11.93 0 0012 24c6.628 0 12-5.372 12-12S18.628 0 12 0zm5.691 17.306c-.24.677-1.408 1.298-1.986 1.386-.511.08-1.16.114-1.87-.117-.432-.137-.99-.321-1.718-.63-3.027-1.261-4.994-4.353-5.142-4.56-.15-.206-1.231-1.641-1.231-3.129 0-1.487.776-2.217 1.051-2.519.274-.302.6-.378.802-.378.205 0 .4.002.576.011.187.009.438-.07.685.52.247.593.843 2.05.916 2.197.073.147.12.322.024.519-.097.197-.146.322-.292.493-.146.17-.308.381-.439.514-.146.146-.298.305-.128.601.17.297.757 1.245 1.624 2.019 1.117.99 2.059 1.296 2.357 1.444.298.149.468.123.639-.073.17-.196.739-.866.936-1.165.196-.298.392-.247.664-.148.272.098 1.727.814 2.029.962.304.148.506.222.582.345.077.124.077.72-.163 1.397z" />
</svg>
);


/**
 * SocialButtons — Muestra los íconos de WhatsApp e Instagram como botones redondos.
 *
 * @param className opcional para posicionar o modificar estilos externos.
 */
export default function SocialButtons({ className = "" }: { className?: string }) {
return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* WhatsApp */}
<center>
    <a
        href="http://bit.ly/40VXrUT"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-green-600 text-green-600 transition-colors hover:bg-green-600 hover:text-white"
    >
        <WhatsAppIcon className="h-5 w-5" />
    </a>
</center>
      {/* Instagram */}
    <a
        href="https://www.instagram.com/idun.bio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-fuchsia-600 text-fuchsia-600 transition-colors hover:bg-fuchsia-600 hover:text-white"
    >
        <Instagram className="h-5 w-5" />
    </a>
    </div>
);
}
