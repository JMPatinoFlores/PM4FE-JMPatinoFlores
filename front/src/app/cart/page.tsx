import { CartComponent } from "@/components/CartComponent";

export default function Cart() {
  const products = [];

  return (
    <div className="text-white min-h-screen p-4 flex flex-col justify-center items-center w-full">
      <div className="w-full max-w-screen-lg">
        <h1 className="title text-4xl font-bold text-center">
          Mi carrito de compras.
        </h1>
      </div>
      <div className="w-full max-w-screen-lg">
        <CartComponent />
      </div>
    </div>
  );
}
