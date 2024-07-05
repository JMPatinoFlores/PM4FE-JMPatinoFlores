"use client";

import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/app/context/cartContext";
import { UserContext } from "@/app/context/userContext";
import Link from "next/link";
import Image from "next/image";

export const AddToCart = ({ id }: { id: number }) => {
  const { cartProducts, addToCart, removeFromCart } = useContext(CartContext);
  const { isLogged } = useContext(UserContext);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const isProductInCart = cartProducts.some((product) => product.id === id);
    setIsAdded(isProductInCart);
  }, [cartProducts, id]);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isAdded) {
      removeFromCart(id);
    } else {
      await addToCart(id);
    }
    setIsAdded(!isAdded);
  };

  if (!isLogged) {
    return (
      <div>
        <Link href="/login">
          <button>
            <Image src={"/addtocart.png"} width={24} height={24} alt="cart" />
          </button>
        </Link>
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center active:scale-95 transition-transform duration-150"
    >
      {isAdded ? (
        <Image src={"/added.png"} width={24} height={24} alt="cart" />
      ) : (
        <Image src={"/addtocart.png"} width={24} height={24} alt="cart" />
      )}
    </button>
  );
};
