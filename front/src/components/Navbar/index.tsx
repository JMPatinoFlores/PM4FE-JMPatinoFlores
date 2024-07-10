"use client";

import { CartContext } from "@/app/context/cartContext";
import { UserContext } from "@/app/context/userContext";
import { IProduct } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

const products: IProduct[] = [];
const Navbar = () => {
  const { isLogged, logOut } = useContext(UserContext);
  const { cartProducts } = useContext(CartContext);

  return (
    <nav className="bg-black p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link
          href="/"
          className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          TT
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          href="/home"
          className="font-semibold px-2 py-2 text-white hover:text-green-300 transition-colors duration-300"
        >
          Inicio
        </Link>
        {isLogged ? (
          <div className="flex items-center space-x-4">
            <Link href="/wishlist" className="px-2 py-2">
              <Image
                src="/heart.png"
                alt="Wishlist"
                width={32}
                height={32}
                className="hover:opacity-75 transition-opacity duration-300 active:scale-95"
              />
            </Link>
            <Link href="/cart" className="relative">
              <Image
                src="/cart.png"
                alt="Cart"
                width={32}
                height={32}
                className="relative hover:opacity-75 transition-opacity duration-300 active:scale-95"
              />
              {cartProducts.length > 0 && (
                <span className="animate-ping absolute top-0 right-0 h-2 w-2 rounded-full ring-2 ring-green-400 bg-green-600"></span>
              )}
            </Link>
            <Link href="/dashboard" className="px-2 py-2">
              <Image
                src="/user.png"
                alt="Profile"
                width={32}
                height={32}
                className="hover:opacity-75 transition-opacity duration-300 active:scale-95"
              />
            </Link>
          </div>
        ) : (
          <Link
            href="/login"
            className="px-2 py-2 text-white font-semibold hover:text-green-300 transition-colors duration-300"
          >
            Iniciar sesión
          </Link>
        )}
        {isLogged ? (
          <button
            className="font-semibold px-2 py-2 rounded-full text-white border-white border-2 hover:bg-white hover:text-black transition-colors duration-300 active:scale-95"
            onClick={logOut}
          >
            Cerrar sesión
          </button>
        ) : (
          <Link
            href="/register"
            className="font-semibold px-2 py-2 rounded-full text-white border-white border-2 hover:bg-white hover:text-black transition-colors duration-300 active:scale-95"
          >
            Registrarse
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
