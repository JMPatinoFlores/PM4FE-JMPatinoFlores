"use client";

import {
  IUserContextType,
  IUserResponse,
  IOrderResponse,
  IUser,
  ILoginUser,
} from "@/interfaces";
import { getUserOrders } from "@/lib/server/fetchOrders";
import { postLogin, postRegister } from "@/lib/server/fetchUsers";
import { createContext, useCallback, useEffect, useState } from "react";

export const UserContext = createContext<IUserContextType>({
  user: null,
  setUser: () => {},
  isLogged: false,
  setIsLogged: () => {},
  signIn: async () => false,
  signUp: async () => false,
  getOrders: async () => {},
  orders: [],
  logOut: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Partial<IUserResponse> | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [orders, setOrders] = useState<IOrderResponse[]>([]);

  const signUp = async (user: Omit<IUser, "id">) => {
    try {
      const data = await postRegister(user);

      if (data.id) {
        await signIn({ email: user.email, password: user.password });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const signIn = async (credentials: ILoginUser) => {
    try {
      const data = await postLogin(credentials);
      if (data.user && data.token) {
        setUser(data.user);
        setIsLogged(true);
        typeof window !== "undefined" &&
          localStorage.setItem("user", JSON.stringify(data.user));
        typeof window !== "undefined" &&
          localStorage.setItem("token", data.token);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const getOrders = useCallback(async () => {
    try {
      const token =
        typeof window !== "undefined" && localStorage.getItem("token");
      if (token) {
        const data = await getUserOrders(token);
        setOrders(data);
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  }, []);

  const logOut = () => {
    const confirm = window.confirm("¿Estás seguro de cerrar sesión?");
    if (confirm) {
      setUser(null);
      setIsLogged(false);
      typeof window !== "undefined" && localStorage.removeItem("user");
      typeof window !== "undefined" && localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    const token =
      typeof window !== "undefined" && localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  useEffect(() => {
    const user = typeof window !== "undefined" && localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      setUser(null);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        setIsLogged,
        signIn,
        signUp,
        getOrders,
        orders,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
