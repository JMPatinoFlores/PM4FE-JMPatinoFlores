"use client";

import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../app/context/userContext";
import Orders from "@/components/Orders";

const UserDashboard = () => {
  const { isLogged, user } = useContext(UserContext);

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="text-white p-8 rounded-lg shadow-lg w-full max-w-screen-lg">
        <h1 className="title text-4xl font-bold mb-6 text-center">
          Panel de usuario
        </h1>
        {isLogged ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-6 shadow-md w-full">
              <h2 className="title text-4xl font-bold mb-4 text-center md:text-left">
                ¡Hola {user?.name}!
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
                Resumen del perfil
              </h3>
              <p className="mb-2">Nombre: {user?.name}</p>
              <p className="mb-2">Correo electrónico: {user?.email}</p>
              <p className="mb-2">Dirección: {user?.address}</p>
              <p className="mb-2">Teléfono: {user?.phone}</p>
            </div>
            <Orders />
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
      </div>
    </div>
  );
};

export default UserDashboard;
