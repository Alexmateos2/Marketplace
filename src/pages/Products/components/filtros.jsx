import { useState } from "react";
import GlareButton from "../../../shared/utils/GlareButton";

const Filtros = () => {
  const [filters, setFilters] = useState({
    price: "",
    sortBy: "newest"
  });

  const handleChange = (filterName, value) => {
    setFilters({
      price: filterName === "price" ? value : "",
      sortBy: filterName === "sortBy" ? value : "newest"
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected filter:", filters);
    // Aquí podrías enviar los filtros al backend o actualizar productos
  };

  return (
    <aside className="w-full lg:w-1/4 xl:w-1/5">
      <form
        className="sticky top-24 space-y-6"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Filters
        </h3>

        <div className="space-y-8 mb-10">
          <label className="block">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Price
            </span>
            <select
              value={filters.price}
              onChange={(e) => handleChange("price", e.target.value)}
              className="form-select p-2 mt-1 block w-full rounded border-gray-300 dark:border-dark bg-background-light dark:bg-surface-dark shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            >
              <option value="">All Prices</option>
              <option value="$0 - $100">$0 - $100</option>
              <option value="$100 - $500">$100 - $500</option>
              <option value="$500+">$500+</option>
            </select>
          </label>

        
          <label className="block">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Sort By
            </span>
            <select
              value={filters.sortBy}
              onChange={(e) => handleChange("sortBy", e.target.value)}
              className="form-select p-2 mt-1 block w-full rounded border-gray-300 dark:border-gray-700 bg-background-light dark:bg-surface-dark shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            >
              <option value="">Newest</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </label>
        </div>

        <GlareButton
          type="submit"
          width="100%"
          textSize="text-sm sm:text-base lg:text-lg w-2/3 lg:w-full mx-auto"
        >
          Apply Filters
        </GlareButton>
      </form>
    </aside>
  );
};

export default Filtros;
