import { fetchProductDetail } from "@/lib/server/fetchProducts";
import Image from "next/image";
import { IParams } from "@/interfaces";
import { AddToCart } from "@/components/AddToCart";
import { AddToWish } from "@/components/AddToWish";

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
              className="object-contain p-6"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="title text-4xl mb-4">{product.name}</h2>
              <p className="text-lg">{product.description}</p>
              <div className="flex py-4">
                <Image src="/rate.png" width={20} height={20} alt="star" />
                <Image src="/rate.png" width={20} height={20} alt="star" />
                <Image src="/rate.png" width={20} height={20} alt="star" />
                <Image src="/rate.png" width={20} height={20} alt="star" />
                <Image src="/rate1.png" width={20} height={20} alt="star" />
              </div>
            </div>
            <div>
              <p className="text-gray-300 text-base my-4">
                Stock: {product.stock}
              </p>
            </div>
            <div className="flex items-center space-x-4 justify-end mt-8">
              <p className="text-center font-bold bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent text-4xl">
                ${product.price}
              </p>
              <div>
                <AddToWish id={product?.id} />
              </div>
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
