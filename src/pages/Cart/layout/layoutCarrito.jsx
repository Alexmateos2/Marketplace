import React from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer.jsx";
import CarritoItem from "../components/carritoItem";
import { useCart } from "../../../shared/hooks/CartContext.jsx";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
const CarritoPage = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const usuario = localStorage.getItem("usuario") || null;
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_usuario: usuario,
          productos: cart.map((item) => ({
            id_producto: item.id,
            cantidad: item.quantity,
          })),
          total: totalPrice,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar ID del pedido para que el invitado pueda consultarlo
        if (!usuario) {
          localStorage.setItem(
            "ultimoPedidoInvitado",
            JSON.stringify({
              id_pedido: data.id_pedido,
              fecha: Date.now(),
            })
          );
        }

        toast.success("Pedido realizado con éxito. ID: " + data.id_pedido);
        clearCart();
        navigate(`/pedidos/historial/details/${data.id_pedido}`);
      } else {
        toast.error("Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error(`Error: ${err.message}`);
    }
  };

  return (
    <div className="dark:bg-background-dark bg-background-light dark:text-content-dark font-display transition-colors min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-8 border-b border-border-dark/40 dark:border-border-dark pb-4 ">
            Carrito de Compras
          </h1>

          {cart.length === 0 ? (
            <p className="px-2 pb-4 font-medium border-b border-border-dark/40 dark:border-border-dark">
              - Tu carrito está vacío.
            </p>
          ) : (
            cart.map((item) => <CarritoItem key={item.id} item={item} />)
          )}

          {/* Resumen del carrito */}
          {cart.length === 0 ? (
            <div className="mt-8 text-center">
              <NavLink
                to="/products"
                className="text-primary font-bold py-3 px-2 text-lg hover:text-primary/60 transition-colors inline-block"
              >
                Continúa comprando
              </NavLink>
            </div>
          ) : (
            <div className="mt-12 p-6 bg-surface-light dark:bg-background-dark/50 rounded-lg">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                Resumen
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-black/80 dark:text-white/80">
                  <p>Subtotal</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-black/80 dark:text-white/80">
                  <p>Envío</p>
                  <p>Gratis</p>
                </div>
                <hr className="border-black/10 dark:border-white/10 my-4" />
                <div className="flex justify-between font-bold text-xl text-black dark:text-white">
                  <p>Total</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full mt-8 bg-primary text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-primary/90 transition-colors"
              >
                Proceder al Pago
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CarritoPage;
