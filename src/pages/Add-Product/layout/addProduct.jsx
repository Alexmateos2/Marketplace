import React from "react";
import Footer from "../../../shared/utils/Footer";
import Navbar from "../../../shared/navbar/navbar";
import FormComponent from "../components/formComponent";

const AddProduct = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-white font-display">
      <Navbar />
      <main className="flex-1 px-4 sm:px-10 py-12 max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">Add a New Product</h1>
          <p className="mt-2 text-lg text-s-light dark:text-content-dark">
            Share your expertise and help others discover great tech.
          </p>
        </header>

        <section className=" px-4 bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-sm border border-border-light dark:border-border-dark transition-colors">
            <FormComponent />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AddProduct;
