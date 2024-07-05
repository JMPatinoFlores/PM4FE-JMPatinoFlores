"use client";

import React, { useContext } from "react";
import { ILogin } from "@/interfaces";
import Image from "next/image";
import productsImage from "../../../public/products.jpg";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { validateLoginForm } from "../../../public/validateLoginData";
import Link from "next/link";
import { UserContext } from "@/app/context/userContext";
import { useRouter } from "next/navigation";

function LoginUser() {
  const { signIn } = useContext(UserContext);
  const router = useRouter();

  const initialValues: ILogin = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: ILogin,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const success = await signIn(values);
    if (success) {
      alert("Inicio de sesión correcto");
      router.push("/home");
    }

    if (!success) {
      alert("Error al iniciar sesión");
    }

    setSubmitting(false);
  };

  return (
    <div className="text-white flex flex-col md:flex-row p-4 m-5 max-h-screen w-full">
      <div className="flex-1 justify-center hidden md:flex">
        <Image
          src={productsImage}
          alt="Products"
          width={500}
          height={500}
          className="mx-5 object-contain md:flex rounded-l-lg"
        />
      </div>
      <div className="flex-1 p-4 m-2 flex flex-col justify-center items-center rounded-r-lg">
        <h1 className="title text-4xl mb-4 text-center">Inicia sesión</h1>
        <Formik
          initialValues={initialValues}
          validate={validateLoginForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full max-w-md">
              <div className="formDiv mb-4">
                <label htmlFor="email">Correo electrónico</label>
                <Field
                  type="text"
                  name="email"
                  placeholder="ejemplo@email.com"
                  className="formInput"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-purple-400 text-sm"
                />
              </div>
              <div className="formDiv mb-4">
                <label htmlFor="password">Contraseña</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="********"
                  className="formInput"
                  autoComplete="current-password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-purple-400 text-sm"
                />
              </div>
              <div className="text-base flex flex-row space-x-1 my-4">
                <p>¿No tienes cuenta?</p>
                <Link
                  href="/register"
                  className="text-purple-400 font-semibold"
                >
                  ¡Regístrate!
                </Link>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn-primary mt-4"
                  disabled={isSubmitting}
                >
                  Ingresar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginUser;
