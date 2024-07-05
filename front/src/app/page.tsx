// pages/index.tsx
import React from "react";
import Image from "next/image";
import appleImage from "../../public/appleImage.png";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="relative z-20 flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={appleImage}
          alt="Apple logo"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-20"
        />
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="flex flex-col text-6xl font-black leading-none uppercase font-bebas-neue sm:text-8xl title">
          Trendy
        </h1>
        <h1 className="flex flex-col text-6xl font-black leading-none uppercase font-bebas-neue sm:text-8xl title">
          Treasures
        </h1>
        <h2 className="text-sm sm:text-base text-white">
          Descubre la magia de la tecnología.
        </h2>
        <p className="text-sm sm:text-base text-white">
          Explora el futuro conectando estilo y tecnología en cada clic.
        </p>
        <div className="mt-8">
          <Link href="/home">
            <button className="px-4 py-2 text-black uppercase bg-green-500 border-2 border-transparent font-bold rounded-lg text-md hover:bg-green-400">
              Explorar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
