"use client";

import { UserContext } from "@/app/context/userContext";
import { useContext, useEffect } from "react";

const Orders = () => {
  const { getOrders, orders, isLogged } = useContext(UserContext);

  useEffect(() => {
    if (isLogged) {
      getOrders();
    }
  }, [isLogged, getOrders]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="flex flex-col items-center p-4 w-full">
      {isLogged ? (
        <div className="w-full max-w-screen-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Mis Pedidos
          </h2>
          {orders.length > 0 ? (
            <table className="w-full text-white table-auto">
              <thead>
                <tr>
                  <th className="border-b-2 border-purple-800 px-4 py-2 text-left">
                    Productos
                  </th>
                  <th className="border-b-2 border-purple-800 px-4 py-2 text-left">
                    Fecha
                  </th>
                  <th className="border-b-2 border-purple-800 px-4 py-2 text-left">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="border-b border-purple-300 px-4 py-2">
                      {order.products.map((product) => (
                        <div key={product.id}>
                          {product.name} x ${product.price}
                        </div>
                      ))}
                    </td>
                    <td className="border-b border-purple-300 px-4 py-2">
                      {formatDate(order.date)}
                    </td>
                    <td className="border-b border-purple-300 px-4 py-2">
                      {order.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center md:text-left">No tienes pedidos aún.</p>
          )}
        </div>
      ) : (
        <p className="text-center md:text-left">
          Debes iniciar sesión para poder ver tus pedidos.
        </p>
      )}
    </div>
  );
};

export default Orders;
