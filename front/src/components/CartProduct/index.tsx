import { IProductCartProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export const CartProduct = ({ product, remove }: IProductCartProps) => {
  return (
    <div>
      <table className="table-auto w-full">
        <tbody>
          <tr className=" text-white flex flex-col md:table-row">
            <td className="px-4 py-2 w-full md:w-1/6 text-left md:text-left">
              <button onClick={remove} className="ml-0 md:ml-4">
                <Image
                  src="/remove.png"
                  alt="remove"
                  width={24}
                  height={24}
                  className="hover:opacity-75 transition-opacity"
                />
              </button>
            </td>
            <td className="px-4 py-2 w-full md:w-2/6 text-center md:text-left">
              <Link
                href={`/details/${product.id}`}
                className="flex flex-col md:flex-row items-center w-full md:w-auto"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-contain h-36 w-36 mx-auto md:mx-0"
                  priority={true}
                />
              </Link>
            </td>
            <td className="px-4 py-2 w-full md:w-3/6 text-center md:text-left">
              <Link
                href={`/details/${product.id}`}
                className="flex flex-col md:flex-row items-center w-full md:w-auto"
              >
                <h3 className="text-xl font-semibold">{product.name}</h3>
              </Link>
            </td>
            <td className="px-4 py-2 w-full md:w-1/3 text-center md:text-right">
              <p className="text-lg">${product.price}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
