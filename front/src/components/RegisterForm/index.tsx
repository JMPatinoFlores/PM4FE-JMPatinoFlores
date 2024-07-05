"use client";

import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateRegisterForm } from "../../../public/validateData";
import { IRegisterValues } from "@/interfaces";
import Image from "next/image";
import laptopImagen from "../../../public/laptop.jpg";
import { UserContext } from "@/app/context/userContext";
import { useRouter } from "next/navigation";

function RegisterUser() {
  const { signUp } = useContext(UserContext);
  const router = useRouter();

  const initialValues: IRegisterValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
  };

  const handleSubmit = async (
    values: IRegisterValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const success = await signUp(values);

    if (success) {
      alert("Usuario registrado correctamente");
      router.push("/login");
    }

    if (!success) {
      alert("Error al registrarse");
    }

    setSubmitting(false);
  };

  return (
    <div className="text-white flex flex-col md:flex-row p-4 m-5 max-h-screen w-full">
      <div className="flex-1 justify-center hidden md:flex">
        <Image
          src={laptopImagen}
          alt="Laptop"
          width={500}
          height={500}
          className="mx-5 object-contain h-full"
        />
      </div>

      <div className="flex-1 p-4 m-2 flex flex-col justify-center items-center">
        <h1 className="title text-4xl mb-4 text-center">Regístrate</h1>
        <Formik
          initialValues={initialValues}
          validate={validateRegisterForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full max-w-md">
              <div className="formDiv mb-4">
                <label htmlFor="name" className="formLabel">
                  Nombre
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="formInput"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-purple-400 text-sm"
                />
              </div>
              <div className="formDiv mb-4">
                <label htmlFor="email" className="formLabel">
                  Correo electrónico
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="ejemplo@mail.com"
                  className="formInput"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-purple-400 text-sm"
                />
              </div>
              <div className="formDiv mb-4">
                <label htmlFor="password" className="formLabel">
                  Contraseña
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="********"
                  className="formInput"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-purple-400 text-sm"
                />
              </div>
              <div className="formDiv mb-4">
                <label htmlFor="confirmPassword" className="formLabel">
                  Confirma tu contraseña
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="********"
                  className="formInput"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-purple-400 text-sm"
                />
              </div>
              <div className="formDiv mb-4">
                <label htmlFor="address" className="formLabel">
                  Dirección
                </label>
                <Field
                  type="text"
                  name="address"
                  placeholder="Dirección"
                  className="formInput"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-purple-400 text-sm"
                />
              </div>
              <div className="formDiv mb-4">
                <label htmlFor="phone" className="formLabel">
                  Teléfono
                </label>
                <Field
                  type="text"
                  name="phone"
                  placeholder="Número de teléfono"
                  className="formInput"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-purple-400 text-sm"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn-primary mt-4"
                  disabled={isSubmitting}
                >
                  Enviar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterUser;
