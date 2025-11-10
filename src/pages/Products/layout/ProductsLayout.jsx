import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";
import Pagination from "../../../shared/utils/pagination";
import Products from "../components/products";
import Filtros from "../components/filtros";
import ProductsHero from "../components/productsHero";

const ProductsPage = ({ category, search }) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ price: "", sortBy: "newest" });
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch global
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/productos");

        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();
        setProductos(data || []);
      } catch (err) {
        console.error("Error fetching productos:", err);
        setError(err.message);
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  // Filtrar + ordenar (igual que antes)
  const filteredProducts = useMemo(() => {
    let result = [...productos];

    if (category) result = result.filter((p) => p.categoria === category);

    if (search) {
      const query = search.toLowerCase().trim();
      result = result.filter((p) => p.nombre.toLowerCase().includes(query));
    }

    if (filters.price) {
      if (filters.price === "0-100") result = result.filter((p) => p.precio <= 100);
      else if (filters.price === "100-500") result = result.filter((p) => p.precio > 100 && p.precio <= 500);
      else if (filters.price === "500+") result = result.filter((p) => p.precio > 500);
    }

    if (filters.sortBy) {
      if (filters.sortBy === "low-high") result.sort((a, b) => a.precio - b.precio);
      else if (filters.sortBy === "high-low") result.sort((a, b) => b.precio - a.precio);
      else if (filters.sortBy === "newest") result.sort((a, b) => b.id_producto - a.id_producto);
      else if (filters.sortBy === "oldest") result.sort((a, b) => a.id_producto - b.id_producto);
    }

    return result;
  }, [productos, category, search, filters]);

  // Paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen dark:bg-background-dark bg-background-light dark:text-content-dark font-display transition-colors">
      <Navbar />
      <main className="grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductsHero
          category={category}
          search={search}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
            totalItems={filteredProducts.length}
        />
        <div className="flex flex-col lg:flex-row gap-8">
          <Filtros setFilters={setFilters} />
          <div className="flex-1">
            <Products
              loading={loading}
              error={error}
              currentProducts={currentProducts}
            />
            <div className="block lg:hidden mt-8">
              <Pagination
                category={category}
                search={search}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
                totalItems={filteredProducts.length}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
