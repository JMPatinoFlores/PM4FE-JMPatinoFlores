import { CartComponent } from "@/components/CartComponent";

export default function Cart() {
  const products = [];

  return (
    <div className="text-white w-full max-w-6xl mx-auto p-4 flex flex-col">
      <div className="mb-6">
        <h1 className="title font-semibold text-4xl mb-4">
          Mi carrito de compras.
        </h1>
      </div>
      <div>
        <CartComponent />
      </div>
    </div>
  );
}
