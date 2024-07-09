"use client";

import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../app/context/userContext";
import Orders from "@/components/Orders";
import Image from "next/image";

const UserDashboard = () => {
  const { isLogged, user } = useContext(UserContext);

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="text-white p-8 rounded-lg shadow-lg w-full max-w-screen-lg">
        <h1 className="title text-4xl font-bold mb-6 text-center">
          Panel de usuario
        </h1>
        {isLogged ? (
          <div className="space-y-8">
            <div className="p-6 shadow-md w-full flex flex-col md:flex-row items-center md:items-start">
              <div className="flex justify-center md:justify-start mb-4 md:mb-0 md:mr-6">
                <Image
                  src="/profile.png"
                  alt="user"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="title text-4xl font-bold mb-4">
                  ¡Hola {user?.name}!
                </h2>
                <h3 className="text-2xl font-semibold mb-4">
                  Resumen del perfil
                </h3>
                <div className="space-y-2">
                  <p>Nombre: {user?.name}</p>
                  <p>Correo electrónico: {user?.email}</p>
                  <p>Dirección: {user?.address}</p>
                  <p>Teléfono: {user?.phone}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
                Mis Pedidos
              </h2>
              <Orders />
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <p>Debes iniciar sesión para poder ver tu panel de usuario.</p>
            <div>
              <Link href={"/register"}>
                <button className="btn-primary my-4 w-full md:w-auto">
                  Registrarse
                </button>
              </Link>
            </div>
            <Link href={"/login"}>
              <button className="btn-primary my-4 w-full md:w-auto">
                Iniciar sesión
              </button>
            </Link>
          </div>
        )}
        <div className="flex flex-col items-center justify-center w-full mt-8 space-y-4">
          <Link href={"/cart"}>
            <button className="btn-secondary w-full md:w-auto flex items-center justify-center space-x-2">
              <span>Ver mi carrito</span>
              <Image
                src="/cart.png"
                alt="cart"
                width={24}
                height={24}
                className="filter invert"
              />
            </button>
          </Link>
          <Link href={"/wishlist"}>
            <button className="btn-secondary w-full md:w-auto flex items-center justify-center space-x-2">
              <span>Ver mi lista de deseos</span>
              <Image
                src="/heart.png"
                alt="wishlist"
                width={24}
                height={24}
                className="filter invert"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
