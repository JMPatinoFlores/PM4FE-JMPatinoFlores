import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center flex-col text-center text-white">
        <div className="flex justify-center mb-4">
          <Image
            src={"/botdance.gif"}
            alt="Bot"
            width={250}
            height={250}
            unoptimized={true}
          />
        </div>
        <h1 className="text-9xl title">404</h1>
        <h2 className="text-2xl mt-2">¡Ups! Página no encontrada</h2>
        <p className="mt-4">La página a la que intentas acceder no existe.</p>
        <Link href={"/"}>
          <button className="btn-primary mt-8 ">Volver al inicio</button>
        </Link>
      </div>
    </div>
  );
}
