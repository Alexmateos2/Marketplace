import React from "react";
import Footer from "../../../shared/utils/Footer";
import Navbar from "../../../shared/navbar/navbar";
import NewCards from "../components/NewCards";
const NewPage = () => {
  return (
    <div className="dark:bg-background-dark dark:text-white bg-background-light  min-h-screen  font-display  transition-colors">
      <main className="flex-1">
        <Navbar />  
        <div className="bg-background-light py-12 dark:bg-background-dark sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-content-light dark:text-content-dark sm:text-5xl">
                Latest Arrivals
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-subtle-light dark:text-subtle-dark">
                Check out the newest additions to our curated collection of tech
                products.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:px-20 lg:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            
              <NewCards />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewPage;
