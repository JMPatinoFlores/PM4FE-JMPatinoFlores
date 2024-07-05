"use client";

import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Orders from "@/components/Orders";
import Image from "next/image";

const UserDashboard = () => {
  const { isLogged, user } = useContext(UserContext);

  return (
    <div className="max-h-screen flex justify-center items-center p-4">
      <div className="text-white p-8 rounded-lg shadow-lg max-w-6xl w-full">
        <h1 className="title text-4xl font-bold mb-6">Panel de usuario</h1>
        {isLogged ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 shadow-md w-full">
              <h2 className="title text-4xl font-bold mb-4">
                ¡Hola {user?.name}!
              </h2>
              <h3 className="text-2xl font-semibold mb-4">
                Resumen del perfil
              </h3>
              <p className="mb-2">Nombre: {user?.name}</p>
              <p className="mb-2">Correo electrónico: {user?.email}</p>
              <p className="mb-2">Dirección: {user?.address}</p>
              <p className="mb-2">Teléfono: {user?.phone}</p>
            </div>
            <Orders />
            {/* <Link href={"/cart"}>
              <button className="flex items-center px-2 py-2 rounded-full text-white border-white border-2 hover:bg-slate-800 hover:text-black transition">
                <Image src="/cart.png" alt="cart" width={50} height={50} />
                Ver carrito
              </button>
            </Link> */}
          </div>
        ) : (
          <div className="text-center space-y-4">
            <p>Debes iniciar sesión para poder ver tu panel de usuario.</p>
            <div>
              <Link href={"/register"}>
                <button className="btn-primary m-5">Registrarse</button>
              </Link>
            </div>
            <Link href={"/login"}>
              <button className="btn-primary m-5">Iniciar sesión</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
