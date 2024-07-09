import { IProductProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { AddToCart } from "../AddToCart";

export const WishProduct = ({ product, remove }: IProductProps) => {
  return (
    <div className="text-white p-4 shadow-lg bg-gray-950 rounded-lg hover:scale-105 ">
      <div className="flex justify-end">
        <button
          onClick={remove}
          className="hover:opacity-75 transition-opacity"
        >
          <Image src="/remove.png" alt="remove" width={24} height={24} />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <Link href={`/details/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain h-36 w-36 mb-4"
            priority={true}
          />
        </Link>
        <Link href={`/details/${product.id}`}>
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        </Link>
      </div>
      <div className="flex justify-between my-4">
        <p className="text-lg font-semibold">${product.price}</p>
        <AddToCart id={product.id} />
      </div>
    </div>
  );
};
