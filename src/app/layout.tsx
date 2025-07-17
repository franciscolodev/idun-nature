import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import Swiper from "@/components/Hero/Swiper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Idún - Cosmética natural y sin tóxicos",
  description:
    "Sin químicos, sin sulfatos, sin petrolatos, zero waste y con respeto animal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <header>
          <Header />
          <Swiper />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
