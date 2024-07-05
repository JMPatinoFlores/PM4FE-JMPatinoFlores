import { fetchProductDetail } from "@/lib/server/fetchProducts";
import Image from "next/image";
import { IParams } from "@/interfaces";
import { AddToCart } from "@/components/AddToCart";

const ProductDetail = async ({ params }: IParams) => {
  const product = await fetchProductDetail(params.id);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex items-center justify-center flex-col text-center">
          <div className="title text-7xl text-center">
            Producto no encontrado
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white flex flex-col m-8 max-h-fit bg-gray-950 rounded-lg items-center max-w-5xl md:flex-row ">
      <div className=" p-2 m-2 bg-gray-950 rounded-lg items-center">
        <div className="text-white flex flex-col md:flex-row p-4 items-center">
          <div className="flex-1 flex justify-center">
            <Image
              src={product.image}
              alt={product.name || "Product image"}
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="title text-4xl mb-4">{product.name}</h2>
              <p className="text-lg">{product.description}</p>
            </div>
            <div>
              <p className="text-gray-300 text-base mb-4">
                Stock: {product.stock}
              </p>
            </div>
            <div className="flex items-center space-x-4 justify-end">
              <p className="text-center font-bold bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent text-4xl my-4">
                ${product.price}
              </p>
              <div>
                <AddToCart id={product?.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
