"use client";

import { CartContext } from "@/app/context/cartContext";
import { UserContext } from "@/app/context/userContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Navbar = () => {
  const { isLogged, logOut } = useContext(UserContext);
  const { cartProducts } = useContext(CartContext);

  return (
    <nav className="bg-black p-4 flex items-center justify-between">
      <div className="flex">
        <Link
          href="/"
          className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          TT
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/home" className="block px-2 py-2 text-white ">
          Inicio
        </Link>
        {isLogged ? (
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="inline-block relative">
              <Image src="/cart.png" alt="Cart" width={24} height={24} />
              {cartProducts.length > 0 && (
                <span className="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
              )}
            </Link>
            <Link href="/dashboard" className="block px-2 py-2 text-white">
              <Image src="/user.png" alt="Profile" width={24} height={24} />
            </Link>
          </div>
        ) : (
          <Link href="/login" className="block px-2 py-2 text-white">
            Iniciar sesión
          </Link>
        )}
        {isLogged ? (
          <button
            className="block px-2 py-2 rounded-full text-white border-white border-2"
            onClick={logOut}
          >
            Cerrar sesión
          </button>
        ) : (
          <Link
            href="/register"
            className="block px-2 py-2 rounded-full text-white border-white border-2"
          >
            Registrarse
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
