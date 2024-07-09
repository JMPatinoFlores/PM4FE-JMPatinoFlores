"use client";

import { useContext, useState, useEffect } from "react";
import { UserContext } from "@/app/context/userContext";
import Link from "next/link";
import { WishContext } from "@/app/context/wishContext";
import { WishProduct } from "../WishProduct";
import Image from "next/image";

export const WishComponent = () => {
  const { wishProducts, removeFromWish } = useContext(WishContext);
  const { isLogged } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWishlist = async () => {
      setLoading(true);
      setLoading(false);
    };

    if (isLogged) {
      loadWishlist();
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
            {wishProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {wishProducts.map((product) => (
                  <WishProduct
                    key={product.id}
                    product={product}
                    remove={() => removeFromWish(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-lg shadow-lg w-full text-center">
                <Image
                  src="/wishlist.png"
                  alt="Wishlist"
                  width={200}
                  height={200}
                  className="mx-auto opacity-50"
                />
                <p className="text-2xl font-bold my-10">
                  No tienes productos en tu lista de deseos.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col justify-center items-center w-full">
            <p className="my-4 py-2 text-center">
              Debes iniciar sesión para ver tu lista de deseos.
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
        <Link
          href="/home"
          className="text-2xl font-bold my-6 flex justify-center"
        >
          <button className="btn-primary text-md md:mt-4 md:w-auto">
            Agregar productos
          </button>
        </Link>
      </div>
    </div>
  );
};
