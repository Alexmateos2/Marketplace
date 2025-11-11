import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../shared/navbar/navbar";
import { useEffect, useState } from "react";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";

const OrderDetailsPage = () => {
  const { id, id_usuario } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const user = id_usuario || localStorage.getItem("usuario");

  const navigate = useNavigate();
  useEffect(() => {
  
    
    if (!user) {
      setError("Please log in to view your orders");
      setTimeout(() => {
        navigate("/");
      }, 1000);

      setLoading(false);
      return;
    }

    const fetchOrderDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `http://localhost:3000/pedidos/detalles/${user}/${id}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        // Aquí no buscamos en un array ni en 'pedidos', porque el backend responde con un objeto
        setOrder(data); // Usa el objeto directamente
      } catch (err) {
        console.error("Error fetching order details:", err);
        setError("Failed to load order details. Please try again later.");
        setOrder(null);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [user, id, navigate, id_usuario]);

  if (loading) {
    return (
      <div className="font-display bg-background-light dark:bg-background-dark transition-colors min-h-screen">
        <Navbar />
        <main className="px-6 sm:px-10 lg:px-20 py-8 flex flex-1 justify-center">
          <p className="text-center text-subtle-light dark:text-subtle-dark">
            Loading order details...
          </p>
        </main>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="font-display bg-background-light dark:bg-background-dark transition-colors min-h-screen">
        <Navbar />
        <main className="px-6 sm:px-10 lg:px-20 py-8 flex flex-1 justify-center">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded">
            {error}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="font-display bg-background-light dark:bg-background-dark transition-colors min-h-screen">
      <Navbar />
      <main className="px-6 sm:px-10 lg:px-20 py-8 flex flex-1 justify-center">
        <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
          <div className="mb-8">
            <NavLink
              className="flex items-center gap-2 text-subtle-light dark:text-subtle-dark hover:text-primary transition-colors w-fit"
              to={
                id_usuario
                  ? `/pedidos/historial/${id_usuario}`
                  : "/pedidos/historial"
              }
            >
              <span className="text-sm font-medium">Back to Order History</span>
            </NavLink>
            <h1 className="text-content-light dark:text-content-dark text-4xl font-black leading-tight tracking-[-0.033em] mt-4">
              Order Details
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-subtle-light dark:text-subtle-dark text-sm">
              <p>Order #{order.id_pedido}</p>
              <div className="size-1 rounded-full bg-border-light dark:bg-border-dark hidden sm:block"></div>
              <p>
                Placed on{" "}
                {new Date(order.fecha).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg border border-border-light dark:border-border-dark">
                <h2 className="text-lg font-bold text-content-light dark:text-content-dark mb-4">
                  Items in this Order ({order.detalles?.length || 0})
                </h2>
                <div className="space-y-4">
                  {order.detalles && order.detalles.length > 0 ? (
                    order.detalles.map((item, idx) => (
                      <div key={item.id_detalle}>
                        <div className="flex items-center gap-4">
                          <div className="rounded-lg size-20 shrink-0 overflow-hidden bg-background-light dark:bg-gray-700">
                            <AdvancedImage
                              cldImg={cld
                                .image(item.imagen)
                                .resize(
                                  fill().width(80).height(80).gravity("auto")
                                )
                                .quality("auto")
                                .format("auto")}
                              alt={item.nombre_producto || "Product"}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold text-content-light dark:text-content-dark">
                              {item.nombre_producto}
                            </p>
                            <p className="text-sm text-subtle-light dark:text-subtle-dark">
                              Qty: {item.cantidad}
                            </p>
                          </div>
                          <p className="font-semibold text-content-light dark:text-content-dark">
                            ${item.precio_unitario * item.cantidad}
                          </p>
                        </div>
                        {idx < order.detalles.length - 1 && (
                          <div className="border-t border-border-light dark:border-border-dark mt-4"></div>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-subtle-light dark:text-subtle-dark">
                      No items in this order
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-card-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-base font-bold text-content-light dark:text-content-dark mb-2">
                      Shipping Address
                    </h3>
                    <p className="text-sm text-subtle-light dark:text-subtle-dark leading-relaxed">
                      {order.nombre_usuario}
                      <br />
                      {order.direccion}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-content-light dark:text-content-dark mb-2">
                      Payment Method
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100"
                          height="100"
                          fill="currentColor"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 5 7 C 2.242188 7 0 9.242188 0 12 L 0 38 C 0 40.757813 2.242188 43 5 43 L 45 43 C 47.757813 43 50 40.757813 50 38 L 50 12 C 50 9.242188 47.757813 7 45 7 Z M 29.6875 19.40625 C 31.050781 19.40625 32.46875 19.96875 32.46875 19.96875 L 31.96875 22.40625 C 31.96875 22.40625 30.890625 21.6875 29.9375 21.6875 C 28.46875 21.6875 27.9375 22.167969 27.9375 22.8125 C 27.9375 24.074219 32.03125 24.296875 32.03125 27.125 C 32.03125 29.476563 29.113281 31.09375 27 31.09375 C 24.886719 31.09375 23.78125 30.46875 23.78125 30.46875 L 24.3125 28.09375 C 24.3125 28.09375 25.417969 28.75 27.125 28.75 C 28.828125 28.75 29.0625 28.023438 29.0625 27.71875 C 29.0625 25.914063 25 26.417969 25 22.90625 C 25 20.964844 26.585938 19.40625 29.6875 19.40625 Z M 16.46875 19.625 L 19.625 19.625 L 15.125 30.75 L 11.875 30.75 L 9.5 21.75 C 9.5 21.75 11.996094 23.023438 13.53125 26.46875 C 13.597656 26.886719 13.78125 27.5625 13.78125 27.5625 Z M 20.78125 19.625 L 23.78125 19.625 L 22 30.75 L 19.03125 30.75 Z M 36.8125 19.625 L 39.90625 19.625 L 42.1875 30.75 L 39.5 30.75 L 39.1875 29.15625 L 35.5 29.15625 L 34.90625 30.75 L 31.96875 30.75 Z M 6.25 19.65625 L 10.8125 19.65625 C 11.976563 19.65625 12.40625 20.75 12.40625 20.75 L 13.40625 25.8125 C 12.054688 21.453125 6.25 19.65625 6.25 19.65625 Z M 37.9375 22.84375 L 36.3125 27.03125 L 38.75 27.03125 Z"></path>
                        </svg>
                      </div>
                      <p className="text-sm text-subtle-light dark:text-subtle-dark">
                        Payment processed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card-light dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark sticky top-28">
                <h2 className="text-lg font-bold text-content-light dark:text-content-dark mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <p className="text-content-light dark:text-subtle-dark">
                      Subtotal
                    </p>
                    <p className="font-medium text-content-light dark:text-content-dark">
                      ${order.total}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-content-light dark:text-subtle-dark">
                      Shipping
                    </p>
                    <p className="font-medium text-primary dark:text-primary-dark">
                      FREE
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-content-light dark:text-subtle-dark">
                      Taxes
                    </p>
                    <p className="font-medium text-primary dark:text-primary-dark">
                      FREE
                    </p>
                  </div>
                </div>
                <div className="border-t border-border-light dark:border-border-dark my-4"></div>
                <div className="flex justify-between items-center pb-4">
                  <p className="text-lg font-bold text-content-light dark:text-content-dark">
                    Total
                  </p>
                  <p className="text-xl font-bold text-content-light dark:text-content-dark">
                    ${order.total}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderDetailsPage;
