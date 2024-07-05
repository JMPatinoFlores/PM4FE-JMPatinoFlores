import { IProductCartProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export const CartProduct = ({ product, remove }: IProductCartProps) => {
  return (
    <div>
      <div>
        <table className="table-auto w-full">
          <tbody>
            <tr className=" text-white">
              <Link
                href={`/details/${product.id}`}
                className="flex items-center"
              >
                <td className="px-4 py-2 w-2/6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain h-36 w-36"
                  />
                </td>
                <td className="px-4 py-2 w-3/6">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                </td>
                <td className="px-4 py-2 w-1/3">
                  <p className="text-lg text-right">${product.price}</p>
                </td>
              </Link>
              <td className="px-4 py-2 w-1/6">
                <button onClick={remove} className="ml-4">
                  <Image
                    src="/remove.png"
                    alt="remove"
                    width={24}
                    height={24}
                    className="hover:opacity-75 transition-opacity"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
