import { WishComponent } from "@/components/WishComponent";
import Image from "next/image";

export default function Wishlist() {
  return (
    <div className="text-white min-h-screen p-4 flex flex-col justify-center items-center w-full">
      <div className="w-full max-w-screen-lg">
        <h1 className="title text-4xl font-bold text-center">
          Mi lista de deseos.
        </h1>
      </div>
      <div className="w-full max-w-screen-lg">
        <WishComponent />
      </div>
      <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
        <div className="flex flex-col items-center">
          <Image src="/delivery.png" alt="Delivery" width={48} height={48} />
          <p>Envío rápido</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/cart.png" alt="Cart" width={48} height={48} />
          <p>Envío gratis</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/secure.png" alt="Secure" width={48} height={48} />
          <p>
            Compra segura <br /> 100% garantizado
          </p>
        </div>
      </div>
    </div>
  );
}
