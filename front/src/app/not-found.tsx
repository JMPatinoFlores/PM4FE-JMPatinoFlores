import React from "react";
import Image from "next/image";
import Link from "next/link";
import appleSpace from "../../public/applespace.jpg";

export default function NotFound() {
  return (
    <div className="relative z-20 flex items-center overflow-hidden bg-black w-full">
      <div className="absolute inset-0">
        <Image
          src={appleSpace}
          alt="Apple logo"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          className="opacity-20"
          priority
        />
      </div>
      <div className="relative z-10 text-center text-white mx-auto">
        <Image
          src={"/botdance.gif"}
          alt="Bot"
          width={250}
          height={250}
          unoptimized={true}
          className="mx-auto"
        />
        <h1 className="text-9xl title">404</h1>
        <div></div>
        <h2 className="text-2xl font-semibold mt-2">
          ¡Ups! Te prediste en el espacio.
        </h2>
        <p className="mt-4 text-xl">
          La página a la que intentas acceder no existe. Por suerte el alien te
          ayudará a regresar.
        </p>
        <p className="text-xl">¡Mucha suerte!</p>
        <Link href={"/"}>
          <button className="btn-primary mt-8 ">Volver al inicio</button>
        </Link>
      </div>
    </div>
  );
}
