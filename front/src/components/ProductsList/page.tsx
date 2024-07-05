import { ProductCard } from "@/components/ProductsCard";
import { IProductProps } from "@/interfaces";
import { fetchProducts } from "@/lib/server/fetchProducts";

export const Products = async () => {
  const products: IProductProps[] = (await fetchProducts()) || [];

  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex items-center justify-center flex-col text-center">
          <div className="title text-7xl text-center">
            No hay productos disponibles
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {products.map((product: IProductProps) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
