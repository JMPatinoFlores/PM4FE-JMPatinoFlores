import { ILogin, IUser } from "@/interfaces";

export const postRegister = async (user: Omit<IUser, "id" | "orders">) => {
  const response = await fetch("http://localhost:4000/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const postLogin = async (credentials: ILogin) => {
  const response = await fetch("http://localhost:4000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
};
