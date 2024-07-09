"use client";

import { IProduct, IWishContextType } from "@/interfaces";
import { fetchProductDetail } from "@/lib/server/fetchProducts";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "./userContext";

//Añade un producto en la wishlist si no está ya en la wishlist
const addProduct = async (
  wishProducts: IProduct[],
  productId: number
): Promise<IProduct[]> => {
  //Busca si el producto ya está en la wishlist
  const productAdded = wishProducts.find(
    (product: IProduct) => product.id === productId
  );
  if (productAdded) return wishProducts;
  //Obtiene los detalles del producto del servidor
  const response = await fetchProductDetail(productId.toString());
  //Devuelve la wishlist con el producto añadido
  return [...wishProducts, response];
};
//Remueve un producto de la wishlist
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
//Crea el contexto de la wishlist con valores predeterminados
export const WishContext = createContext<IWishContextType>({
  wishProducts: [],
  addToWish: async () => {},
  removeFromWish: () => {},
});
//Provee el contexto de la wishlist
export const WishProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContext(UserContext);
  //Memoriza la clave de la wishlist
  const wishKey = useMemo(
    () => (user ? `wish_${user?.id}` : "wishProducts"),
    [user]
  );
  //Establece el estado de la wishlist localmente, lista de productos en la wishlist
  const [wishProducts, setWishProducts] = useState<IProduct[]>(() =>
    getStoreWish(wishKey)
  );
  //Añade un producto a la wishlist y actualiza el almacenamiento local
  const addToWish = async (productId: number) => {
    const newWishProducts = await addProduct(wishProducts, productId);
    setWishProducts(newWishProducts);
    storeWish(wishKey, newWishProducts);
    console.log("Agregado a la wishlist", newWishProducts);
  };
  //Remueve un producto de la wishlist y actualiza el almacenamiento local
  const removeFromWish = (productId: number) => {
    const newWishProducts = removeProduct(wishProducts, productId);
    setWishProducts(newWishProducts);
    storeWish(wishKey, newWishProducts);
    console.log("Removido de la wishlist", newWishProducts);
  };
  //Obtiene la wishlist almacenada en el almacenamiento local
  useEffect(() => {
    const storedWish = getStoreWish(wishKey);
    setWishProducts(storedWish);
  }, [wishKey]);
  //Provee el contexto de la wishlist
  return (
    <WishContext.Provider value={{ wishProducts, addToWish, removeFromWish }}>
      {children}
    </WishContext.Provider>
  );
};
