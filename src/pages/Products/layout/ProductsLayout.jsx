import React, { useEffect, useState, useMemo, useCallback, Suspense } from "react";
import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";
import Pagination from "../../../shared/utils/pagination";
import Filtros from "../components/filtros";
import ProductsHero from "../components/productsHero";
import { toast } from "react-toastify";

// Lazy load del componente Products
const Products = React.lazy(() => import("../components/products"));

const ProductsPage = ({ category, search }) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ price: "", sortBy: "newest" });
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch global
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/productos");
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();

        // Pre-procesar nombres para búsqueda
        const processed = (data || []).map(p => ({
          ...p,
          searchableName: p.nombre.toLowerCase(),
        }));

        setProductos(processed);
      } catch (err) {
        toast.error(err.message);
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  // Memoizar filtrado y ordenamiento
  const filteredProducts = useMemo(() => {
    let result = [...productos];

    if (category) result = result.filter(p => p.categoria === category);

    if (search) {
      const query = search.toLowerCase().trim();
      result = result.filter(p => p.searchableName.includes(query));
    }

    if (filters.price) {
      if (filters.price === "0-100") result = result.filter(p => p.precio <= 100);
      else if (filters.price === "100-500") result = result.filter(p => p.precio > 100 && p.precio <= 500);
      else if (filters.price === "500+") result = result.filter(p => p.precio > 500);
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
  const currentProducts = useMemo(
    () => filteredProducts.slice(startIndex, startIndex + itemsPerPage),
    [filteredProducts, startIndex]
  );

  // Callbacks memoizados
  const handlePageChange = useCallback((page) => setCurrentPage(page), []);
  const handleSetFilters = useCallback((newFilters) => setFilters(newFilters), []);

  return (
    <div className="flex flex-col min-h-screen dark:bg-background-dark bg-background-light dark:text-content-dark font-display transition-colors">
      <Navbar />
      <main className="grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductsHero
          category={category}
          search={search}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          totalItems={filteredProducts.length}
        />
        <div className="flex flex-col lg:flex-row gap-8">
          <Filtros setFilters={handleSetFilters} />
          <div className="flex-1">
            <Suspense fallback={<div className="text-center py-20">Cargando productos...</div>}>
              <Products loading={loading} currentProducts={currentProducts} />
            </Suspense>
            <div className="block lg:hidden mt-8">
              <Pagination
                category={category}
                search={search}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
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
