import { IProduct } from "@/interfaces";

export const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch(
      "https://pm4fe-jmpatinoflores.onrender.com/products"
    );

    if (!response.ok) {
      throw new Error(
        `Error en la respuesta: ${response.status} ${response.statusText}`
      );
    }

    const product = await response.json();
    return product;
  } catch (error) {
    console.log("Error al obtener los productos", error);
    return [];
  }
};

export const fetchProductDetail = async (id: string) => {
  try {
    const response = await fetch(
      `https://pm4fe-jmpatinoflores.onrender.com/products/${id}`,
      {
        cache: "no-cache",
      }
    );

    if (!response.ok) {
      throw new Error(
        `Error en la respuesta: ${response.status} ${response.statusText}`
      );
    }

    const product = await response.json();
    console.log(product);
    return product;
  } catch (error) {
    console.error("Error al obtener el producto", error);
    return null;
  }
};
