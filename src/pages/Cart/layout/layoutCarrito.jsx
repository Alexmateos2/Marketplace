import React from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/Footer";
import CarritoItem from "../components/carritoItem";

const CarritoPage = () => {
  return (
    <div className="dark:bg-background-dark dark:text-content-dark font-display transition-colors ">
      <Navbar />
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-8">
            Shopping Cart
          </h1>

          <CarritoItem />

          {/* Summary */}
          <div className="mt-12 p-6 bg-white dark:bg-background-dark/50 rounded-lg">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between text-black/80 dark:text-white/80">
                <p>Subtotal</p>
                <p>$457.00</p>
              </div>
              <div className="flex justify-between text-black/80 dark:text-white/80">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <hr className="border-black/10 dark:border-white/10 my-4" />
              <div className="flex justify-between font-bold text-xl text-black dark:text-white">
                <p>Total</p>
                <p>$493.56</p>
              </div>
            </div>
            <button className="w-full mt-8 bg-primary text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-primary/90 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarritoPage;
