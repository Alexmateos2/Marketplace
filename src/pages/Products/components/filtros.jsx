import { useState } from "react";
import GlareButton from "../../../shared/utils/GlareButton";

const Filtros = ({ setFilters }) => {

  const [localFilters, setLocalFilters] = useState({
    price: "",
    sortBy: "newest",
  });

  const handleChange = (filterName, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters(localFilters);
    console.log(setFilters)
  };

  return (
    <aside className="w-full lg:w-1/4 xl:w-1/5">
      <form className="sticky top-24 space-y-6" onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Filtros
        </h3>

        <div className="space-y-8 mb-10">
          <label className="block">
            <span className="text-sm font-medium text-content-light dark:text-content-dark">
              Precio
            </span>
            <select
              value={localFilters.price}
              onChange={(e) => handleChange("price", e.target.value)}
              className="form-select p-2 mt-1 block w-full rounded border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            >
              <option value="">Todos los precios</option>
              <option value="0-100">$0 - $100</option>
              <option value="100-500">$100 - $500</option>
              <option value="500+">$500+</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-content-light dark:text-content-dark">
              Ordenar por
            </span>
            <select
              value={localFilters.sortBy}
              onChange={(e) => handleChange("sortBy", e.target.value)}
              className="form-select p-2 mt-1 block w-full rounded border border-border-light dark:border-gray-700 bg-surface-light dark:bg-surface-dark shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            >
              <option value="">Más recientes</option>
              <option value="oldest">Más antiguos</option>
              <option value="low-high">Precio: menor a mayor</option>
              <option value="high-low">Precio: mayor a menor</option>
            </select>
          </label>
        </div>

        <GlareButton
          type="submit"
          width="100%"
          textSize="text-sm sm:text-base lg:text-lg w-2/3 lg:w-full mx-auto"
        >
          Aplicar filtros
        </GlareButton>
      </form>
    </aside>
  );
};

export default Filtros;
