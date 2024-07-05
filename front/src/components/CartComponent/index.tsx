"use client";

import { CartContext } from "@/app/context/cartContext";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "@/app/context/userContext";
import { CartProduct } from "../CartProduct";
import Link from "next/link";

export const CartComponent = () => {
  const { cartProducts, removeFromCart, total, procedToCheckout } =
    useContext(CartContext);
  const { isLogged } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCart = async () => {
      setLoading(true);
      setLoading(false);
    };

    if (isLogged) {
      loadCart();
    }
  }, [isLogged]);

  return (
    <div className="max-w-screen-lg flex justify-center p-4 w-full">
      <div className="text-white p-4 w-full max-w-screen-lg">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-black rounded-full border-2 border-white"></div>
            </div>
          </div>
        ) : isLogged ? (
          <>
            {cartProducts.length > 0 ? (
              cartProducts.map((product) => (
                <div key={product.id} className="w-full">
                  <CartProduct
                    product={product}
                    remove={() => removeFromCart(product.id)}
                  />
                </div>
              ))
            ) : (
              <div className="p-8 rounded-lg shadow-lg w-full text-center">
                <div>
                  <p className="text-center text-2xl font-bold my-10">
                    No tienes productos en tu carrito.
                  </p>
                </div>
                <Link
                  href="/home"
                  className="text-center text-2xl font-bold my-6 flex justify-center"
                >
                  <button className="btn-primary text-md md:mt-4 md:w-auto">
                    Agregar productos
                  </button>
                </Link>
              </div>
            )}
            {total > 0 && (
              <div className="flex flex-col w-full">
                <div className="flex flex-col md:flex-row justify-between items-center my-4 py-2 w-full">
                  <div>
                    <h3 className="font-semibold text-lg">Total: ${total}</h3>
                  </div>
                  <button
                    onClick={procedToCheckout}
                    className="btn-secondary text-md mt-4 md:mt-0 w-full md:w-auto"
                  >
                    Comprar
                  </button>
                </div>
                <div className="w-full">
                  <Link
                    href="/home"
                    className="flex justify-center my-4 py-2 w-full"
                  >
                    <button className="btn-primary text-md w-full md:w-auto">
                      Agregar productos
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col justify-center items-center w-full">
            <p className="my-4 py-2 text-center">
              Debes iniciar sesión para ver tu carrito.
            </p>
            <Link
              href={"/login"}
              className="my-4 py-2 w-full flex justify-center"
            >
              <button className="btn-secondary text-md w-full md:w-auto">
                Iniciar sesión
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
