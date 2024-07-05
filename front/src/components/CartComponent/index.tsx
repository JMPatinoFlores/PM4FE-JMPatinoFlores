"use client";

import { CartContext } from "@/app/context/cartContext";
import { useContext } from "react";
import { UserContext } from "@/app/context/userContext";
import { CartProduct } from "../CartProduct";
import Link from "next/link";

export const CartComponent = () => {
  const { cartProducts, removeFromCart, total, procedToCheckout } =
    useContext(CartContext);
  const { isLogged } = useContext(UserContext);

  return (
    <div className="max-h-screen flex justify-center items-center p-4">
      <div className="text-white p-8 h-full w-full">
        {isLogged ? (
          <>
            {cartProducts.length > 0 ? (
              cartProducts.map((product) => (
                <div key={product.id} className="space-y-4">
                  <CartProduct
                    product={product}
                    remove={() => removeFromCart(product.id)}
                  />
                </div>
              ))
            ) : (
              <div className="p-8 rounded-lg shadow-lg max-w-6xl w-full">
                <div>
                  <p className=" text-2xl font-bold mb-6">
                    No tienes productos en tu carrito.
                  </p>
                </div>
                <Link href="/home" className="flex justify-center my-4 py-2">
                  <button className="btn-primary text-md">
                    Agregar productos
                  </button>
                </Link>
              </div>
            )}
            {total > 0 && (
              <div className="flex flex-col">
                <div className="flex justify-between items-center my-4 py-2">
                  <div>
                    <h3 className="font-semibold text-lg">Total: ${total}</h3>
                  </div>
                  <button
                    onClick={procedToCheckout}
                    className="btn-secondary text-md"
                  >
                    Comprar
                  </button>
                </div>
                <div>
                  <Link href="/home" className="flex justify-center my-4 py-2">
                    <button className="btn-primary text-md">
                      Agregar productos
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <p className="my-4 py-2">
              Debes iniciar sesión para ver tu carrito.
            </p>
            <Link href={"/login"} className="my-4 py-2">
              <button className="btn-secondary text-md">Iniciar sesión</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
