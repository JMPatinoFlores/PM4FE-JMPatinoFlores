import React from "react";

///////////////// Products

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface IProductCartProps {
  product: IProduct;
  remove?: () => void;
}

export interface IParams {
  params: {
    id: string;
  };
}

export interface ICartContextType {
  cartProducts: IProduct[];
  addToCart: (productId: number) => Promise<void>;
  removeFromCart: (productId: number) => void;
  total: number;
  procedToCheckout: () => void;
}

///////////////// Users

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  orders?: IOrderResponse[];
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUserResponse {
  id: number;
  email: string;
  name: string;
  token: string;
}

export interface ICreateOrder {
  userId: number;
  products: number[];
}

export interface IOrderResponse {
  id: number;
  status: string;
  date: string;
  user: IUser;
  products: IProduct[];
}

export interface IOrderProps {
  order: IOrderResponse;
}

export interface IRegisterValues {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface IUserContextType {
  user: Partial<IUser> | null;
  setUser: React.Dispatch<React.SetStateAction<Partial<IUser> | null>>;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  signIn: (credentials: ILogin) => Promise<boolean>;
  signUp: (user: Omit<IUser, "id">) => Promise<boolean>;
  getOrders: () => void;
  orders: IOrderResponse[];
  logOut: () => void;
}
