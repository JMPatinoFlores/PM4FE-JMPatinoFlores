import React from "react";
import { Products } from "@/components/ProductsList";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <div className="md:flex justify-between w-full items-center text-white hidden mt-4">
        <div className="px-4 flex-1 items-center">
          <h1 className="font-semibold text-4xl">Bienvenido a</h1>
          <h2 className="title text-6xl py-2">TrendyTreasures</h2>
          <p>La mejor tienda de tecnología en línea.</p>
          <p>Únete a la familia y obtén grandes beneficios.</p>
          <Link href="/register">
            <button className="btn-secondary flex mt-8">Registrarse</button>
          </Link>
        </div>
        <Image
          src={"/Family_iPhone.png"}
          width={400}
          height={400}
          alt={"Family iPhone"}
          className=" object-contain transition-transform duration-300 hover:scale-125"
        />
      </div>
      <Products />;
    </div>
  );
};

export default Home;
