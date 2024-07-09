"use client";

import { useContext, useState, useEffect } from "react";
import { UserContext } from "@/app/context/userContext";
import Link from "next/link";
import Image from "next/image";
import { WishContext } from "@/app/context/wishContext";

export const AddToWish = ({ id }: { id: number }) => {
  const { addToWish, removeFromWish, wishProducts } = useContext(WishContext);
  const { isLogged } = useContext(UserContext);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const isProductInWish = wishProducts.some((product) => product.id === id);
    setIsAdded(isProductInWish);
  }, [wishProducts, id]);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isAdded) {
      removeFromWish(id);
    } else {
      await addToWish(id);
    }
    setIsAdded(!isAdded);
  };

  if (!isLogged) {
    return (
      <div>
        <Link href="/login">
          <button>
            <Image src={"/heart.png"} width={24} height={24} alt="cart" />
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
        <Image src={"/heartfill.png"} width={24} height={24} alt="cart" />
      ) : (
        <Image src={"/heart.png"} width={24} height={24} alt="cart" />
      )}
    </button>
  );
};
