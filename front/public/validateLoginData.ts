import { ILogin } from "@/interfaces";

export const validateLoginForm = (values: ILogin) => {
  const errors: Partial<ILogin> = {};

  if (!values.email) {
    errors.email = "Correo electrónico es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Correo electrónico inválido";
  }

  if (!values.password) {
    errors.password = "Contraseña requerida";
  }

  return errors;
};
