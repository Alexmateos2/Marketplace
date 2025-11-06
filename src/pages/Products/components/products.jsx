import { useMemo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../../shared/hooks/CartContext.jsx";
import { cld } from "../../../shared/utils/cloudinary.js";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";
const Products = ({ category, search, currentPage, itemsPerPage, filters }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { cart, addToCart } = useCart();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/productos");

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setProductos(data || []);
        setError(null);
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

  // Invertir productos (los más nuevos primero)
  const products = useMemo(() => {
    return productos.length > 0 ? [...productos].reverse() : [];
  }, [productos]);

  // Aplicar filtros y ordenamiento
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filtrar por categoría
    if (category) {
      result = result.filter((p) => p.categoria === category);
    }

    // Filtrar por búsqueda
    if (search) {
      const query = search.toLowerCase().trim();
      result = result.filter((p) => p.nombre.toLowerCase().includes(query));
    }

    // Filtrar por rango de precio
    if (filters?.price) {
      if (filters.price === "0-100")
        result = result.filter((p) => p.precio <= 100);
      else if (filters.price === "100-500")
        result = result.filter((p) => p.precio > 100 && p.precio <= 500);
      else if (filters.price === "500+")
        result = result.filter((p) => p.precio > 500);
    }

    // Ordenar
    if (filters?.sortBy) {
      if (filters.sortBy === "low-high")
        result.sort((a, b) => a.precio - b.precio);
      else if (filters.sortBy === "high-low")
        result.sort((a, b) => b.precio - a.precio);
      else if (filters.sortBy === "newest")
        result.sort((a, b) => b.id_producto - a.id_producto);
      else if (filters.sortBy === "oldest")
        result.sort((a, b) => a.id_producto - b.id_producto);
    }

    return result;
  }, [products, category, search, filters]);

  // Paginación
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Estados de carga y error
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-600 dark:text-red-400 text-lg">Error: {error}</p>
      </div>
    );
  }

  if (currentProducts.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          No hay productos disponibles
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6 font-display mx-auto mt-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
      {currentProducts.map((product) => {
        const productInCart = cart.find(
          (item) => item.id === product.id_producto
        );

        const handleAddToCart = () => {
          addToCart({
            id: product.id_producto,
            name: product.nombre,
            price: product.precio,
            image: product.imagen,
            quantity: 1,
          });
        };

        return (
          <div
            key={product.id_producto}
            className="h-full flex flex-col bg-surface-light dark:bg-surface-dark rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <NavLink
              to={`/product/${product.id_producto}`}
              className="flex flex-col flex-grow"
            >
              <AdvancedImage
                cldImg={cld
                  .image(product.imagen)
                  .resize(fill().width(400).height(400).gravity("auto"))
                  .quality("auto")
                  .format("auto")}
                alt={product.nombre}
                fecthpriority="high"
                className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="px-4 py-5 flex flex-col flex-grow">
                <h4 className="font-bold text-md lg:text-lg text-gray-800 dark:text-gray-100 text-center sm:text-start flex-grow">
                  {product.nombre}
                </h4>
              </div>
            </NavLink>
            <div className="px-4 pb-4 flex flex-col sm:flex-row items-center justify-between gap-2 mt-auto relative">
              <p className="text-gray-700 dark:text-subtle-dark font-bold text-sm lg:text-lg mt-1 truncate">
                $
                {product.precio.toLocaleString("es-ES", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <div className="relative">
                <button
                  onClick={handleAddToCart}
                  className="bg-primary text-white rounded-full px-4 py-2 text-xs sm:text-md w-full sm:w-auto hover:bg-primary/90 transition-all font-bold cursor-pointer hover:scale-105"
                >
                  Add to cart
                </button>
                {productInCart && (
                  <span className="absolute -bottom-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {productInCart.quantity > 9 ? "9+" : productInCart.quantity}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
