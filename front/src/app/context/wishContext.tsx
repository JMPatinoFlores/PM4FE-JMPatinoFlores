"use client";

import { IProduct, IWishContextType } from "@/interfaces";
import { fetchProductDetail } from "@/lib/server/fetchProducts";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "./userContext";

const addProduct = async (
  wishProducts: IProduct[],
  productId: number
): Promise<IProduct[]> => {
  const productAdded = wishProducts.find(
    (product: IProduct) => product.id === productId
  );
  if (productAdded) return wishProducts;
  const response = await fetchProductDetail(productId.toString());
  return [...wishProducts, response];
};

const removeProduct = (wishProducts: IProduct[], productId: number) => {
  return wishProducts.filter((product) => product.id !== productId);
};

const getStoreWish = (key: string): IProduct[] => {
  if (typeof window !== "undefined") {
    const storedWish = localStorage.getItem(key);
    return storedWish ? JSON.parse(storedWish) : [];
  }
  return [];
};

const storeWish = (key: string, wishProducts: IProduct[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(wishProducts));
  }
};

export const WishContext = createContext<IWishContextType>({
  wishProducts: [],
  addToWish: async () => {},
  removeFromWish: () => {},
});

export const WishProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContext(UserContext);

  const wishKey = useMemo(
    () => (user ? `wish_${user?.id}` : "wishProducts"),
    [user]
  );

  const [wishProducts, setWishProducts] = useState<IProduct[]>(() =>
    getStoreWish(wishKey)
  );

  const addToWish = async (productId: number) => {
    const newWishProducts = await addProduct(wishProducts, productId);
    setWishProducts(newWishProducts);
    storeWish(wishKey, newWishProducts);
    console.log("Agregado a la wishlist", newWishProducts);
  };

  const removeFromWish = (productId: number) => {
    const newWishProducts = removeProduct(wishProducts, productId);
    setWishProducts(newWishProducts);
    storeWish(wishKey, newWishProducts);
    console.log("Removido de la wishlist", newWishProducts);
  };

  useEffect(() => {
    const storedWish = getStoreWish(wishKey);
    setWishProducts(storedWish);
  }, [wishKey]);

  return (
    <WishContext.Provider value={{ wishProducts, addToWish, removeFromWish }}>
      {children}
    </WishContext.Provider>
  );
};
