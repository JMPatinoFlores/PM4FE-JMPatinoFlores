"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/interfaces";
import { UserContext } from "@/app/context/userContext";
import { AddToCart } from "@/components/AddToCart";
import { AddToWish } from "../AddToWish";

export const ProductCard = ({ product }: { product: IProduct }) => {
  const { isLogged } = useContext(UserContext);

  return (
    <div>
      <div className="max-w-sm text-white p-4 flex flex-col items-center bg-gray-950 rounded-lg hover:scale-105">
        <div>
          <Link href={`/details/${product.id}`}>
            <div className="h-72">
              <Image
                src={product.image}
                alt={product.name}
                width={450}
                height={450}
                className="object-contain h-72"
                priority={true}
              />
            </div>

            <div className="mt-4 w-full">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-xl tracking-tight text-white">
                  {product.name}
                </span>
              </div>
            </div>
          </Link>
          <div className="flex justify-between items-center mt-2">
            <p className=" text-3xl font-bold bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
              ${product.price}
            </p>
            <div className="flex space-x-2">
              <div>
                <AddToWish id={product?.id} />
              </div>

              <div>
                <AddToCart id={product?.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
