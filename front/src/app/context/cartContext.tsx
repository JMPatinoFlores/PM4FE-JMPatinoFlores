"use client";

import { ICartContextType, IProduct } from "@/interfaces";
import { fetchProductDetail } from "@/lib/server/fetchProducts";
import { createContext, useState, useEffect, useContext, useMemo } from "react";
import { UserContext } from "@/app/context/userContext";

const addProduct = async (
  cartProducts: IProduct[],
  productId: number
): Promise<IProduct[]> => {
  const productAdded = cartProducts.find(
    (product: IProduct) => product.id === productId
  );
  if (productAdded) return cartProducts;
  const response = await fetchProductDetail(productId.toString());
  return [...cartProducts, response];
};

const removeProduct = (cartProducts: IProduct[], productId: number) => {
  return cartProducts.filter((product) => product.id !== productId);
};

const getStoredCart = (key: string): IProduct[] => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem(key);
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

const storeCart = (key: string, cartProducts: IProduct[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(cartProducts));
  }
};

export const CartContext = createContext<ICartContextType>({
  cartProducts: [],
  addToCart: async () => {},
  removeFromCart: () => {},
  total: 0,
  procedToCheckout: () => {},
});

const checkout = async (cartProducts: IProduct[]) => {
  try {
    const products = cartProducts.map((product) => product.id);
    const token =
      typeof window !== "undefined" && localStorage.getItem("token");
    const response = await fetch(
      "https://pm4fe-jmpatinoflores.onrender.com/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({ products }),
      }
    );
    if (response.ok) {
      console.log("Orden creada");
    } else {
      console.log("Error al crear la orden");
    }
  } catch (error) {
    console.log(error);
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContext(UserContext);
  const cartKey = useMemo(
    () => (user ? `cartProducts_${user.id}` : "cartProducts"),
    [user]
  );

  const [cartProducts, setCartProducts] = useState<IProduct[]>(() =>
    getStoredCart(cartKey)
  );
  const [total, setTotal] = useState(0);

  const addToCart = async (productId: number) => {
    const newCartProducts = await addProduct(cartProducts, productId);
    setCartProducts(newCartProducts);
    calculateTotal(newCartProducts);
    storeCart(cartKey, newCartProducts);
    console.log("Producto añadido:", newCartProducts);
  };

  const removeFromCart = (productId: number) => {
    const newCartProducts = removeProduct(cartProducts, productId);
    setCartProducts(newCartProducts);
    calculateTotal(newCartProducts);
    storeCart(cartKey, newCartProducts);
    console.log("Producto removido:", newCartProducts);
  };

  const calculateTotal = (cartProducts: IProduct[]) => {
    const totalPrice = cartProducts.reduce(
      (total, product) => total + product.price,
      0
    );
    setTotal(totalPrice);
  };

  const procedToCheckout = () => {
    checkout(cartProducts);
    setCartProducts([]);
    storeCart(cartKey, []);
    alert("Gracias por tu compra");
  };

  useEffect(() => {
    calculateTotal(cartProducts);
  }, [cartProducts]);

  useEffect(() => {
    const storedCart = getStoredCart(cartKey);
    setCartProducts(storedCart);
  }, [cartKey]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        removeFromCart,
        total,
        procedToCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
