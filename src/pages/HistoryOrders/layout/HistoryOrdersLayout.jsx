import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";
import { useNavigate } from "react-router-dom";
const HistoryOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = localStorage.getItem("usuario");
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      setError("Please log in to view your orders");
      setLoading(false);
      setTimeout(() => {
        navigate("/");
      },1000);

      return;
    }

    const fetchProductos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`http://localhost:3000/pedidos/${user}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setOrders(data || []);
      } catch (err) {
        console.error("Error fetching productos:", err);
        setError("Failed to load orders. Please try again later.");
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [navigate, user]);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 sm:px-10 lg:px-20 py-8 flex justify-center bg-background-light dark:bg-background-dark font-display">
        <div className="flex flex-col w-full max-w-4xl">
          <NavLink
            to="/profile"
            className="text-sm pb-4 font-medium text-subtle-light dark:text-subtle-dark hover:underline transition"
          >
            Back to profile
          </NavLink>

          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <h1 className="text-content-light dark:text-content-dark text-4xl font-black leading-tight">
              Order History
            </h1>
          </div>

          {loading ? (
            <p className="text-center text-subtle-light dark:text-subtle-dark mt-6">
              Loading your orders...
            </p>
          ) : error ? (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded">
              {error}
            </div>
          ) : orders.length === 0 ? (
            <p className="text-center text-subtle-light dark:text-subtle-dark mt-6">
              You have no orders yet.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {orders.map((order) => (
                <div
                  key={order.id_pedido}
                  className="flex flex-col sm:flex-row gap-4 items-center md:items-start sm:gap-6 bg-white dark:bg-surface-dark p-6 rounded-lg border border-border-light dark:border-border-dark hover:shadow-md hover:border-blue-500/50 transition-all"
                >
                  <div className="flex justify-center md:justify-start items-center -space-x-4 w-full sm:w-auto sm:min-w-[250px]">
                    {order.detalles && order.detalles.length > 0 ? (
                      <>
                        {order.detalles.slice(0, 3).map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg w-[70px] h-[70px] border-2 border-border-light dark:border-border-dark ring-1 ring-gray-200 overflow-hidden bg-background-light dark:bg-surface-dark"
                          >
                            <AdvancedImage
                              cldImg={cld
                                .image(item.imagen)
                                .resize(
                                  fill().width(70).height(70).gravity("auto")
                                )
                                .quality("auto")
                                .format("auto")}
                              alt={item.nombre_producto || "Product"}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        {order.detalles.length > 3 && (
                          <div className="rounded-lg w-[70px] h-[70px] border-2 border-border-light dark:border-border-dark ring-1 ring-gray-100 bg-white dark:bg-gray-700 flex items-center justify-center">
                            <p className="text-content-light dark:text-content-dark font-bold text-sm">
                              +{order.detalles.length - 3}
                            </p>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="bg-gray-300 rounded-lg w-[70px] h-[70px] border-2 border-border-light ring-1 ring-gray-200" />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col justify-center sm:text-center items-center md:items-start">
                    <p className="text-content-light dark:text-content-dark text-lg font-bold">
                      Order #{order.id_pedido}
                    </p>
                    <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal mt-1">
                      {order.detalles && order.detalles.length > 0
                        ? `${order.detalles[0].nombre_producto}${
                            order.detalles.length > 1
                              ? ` + ${order.detalles.length - 1} more`
                              : ""
                          }`
                        : "No description"}
                    </p>
                    <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal">
                      Placed on{" "}
                      {new Date(order.fecha).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:items-start justify-between gap-2">
                    <p className="text-content-light dark:text-content-dark text-lg font-bold">
                      ${order.total}
                    </p>
                    <NavLink
                      to={`/pedidos/historial/details/${order.id_pedido}`}
                      className="text-primary text-sm font-bold hover:underline cursor-pointer"
                    >
                      View Details
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryOrdersPage;
