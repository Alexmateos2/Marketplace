// src/__tests__/Products.test.jsx
import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";

// Mock CartContext
vi.mock("../../../shared/hooks/CartContext.jsx", () => {
  const mockContext = createContext(null);
  return {
    CartContext: mockContext,
    useCart: () => ({
      cart: [],
      addToCart: vi.fn(),
    }),
  };
});

// Mock Cloudinary - properly handle cldImg prop
vi.mock("@cloudinary/react", () => ({
  // eslint-disable-next-line no-unused-vars
  AdvancedImage: ({ cldImg, ...props }) => {
    return React.createElement("img", { ...props, "data-testid": "product-image" });
  },
}));

vi.mock("../../../shared/utils/cloudinary.js", () => ({
  cld: {
    image: () => ({
      resize: () => ({
        quality: () => ({
          format: () => ({}),
        }),
      }),
    }),
  },
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useLocation: () => ({
      pathname: "/products",
      search: "",
      hash: "",
      state: null,
    }),
  };
});

import Products from "../pages/Products/components/products.jsx";
import { CartContext } from "../shared/hooks/CartContext.jsx";

describe("Products component - integración básica sin CartProvider", () => {
  const mockProducts = [
    { id_producto: 1, nombre: "Producto A", precio: 19.99, imagen: "img1" },
    { id_producto: 2, nombre: "Producto B", precio: 29.5, imagen: "img2" },
  ];

  const renderComponent = (props) => {
    const mockValue = { cart: [], addToCart: vi.fn() };
    return render(
      <BrowserRouter>
        <CartContext.Provider value={mockValue}>
          <Products {...props} />
        </CartContext.Provider>
      </BrowserRouter>
    );
  };

  it("renderiza todos los productos", () => {
    renderComponent({ loading: false, currentProducts: mockProducts });
    expect(screen.getByText("Producto A")).toBeDefined();
    expect(screen.getByText("Producto B")).toBeDefined();
  });

  it("muestra precios formateados correctamente", () => {
    renderComponent({ loading: false, currentProducts: mockProducts });
    const prices = screen.getAllByText(/19,99/);
    expect(prices.length).toBeGreaterThan(0);
    expect(screen.getAllByText(/29,50/).length).toBeGreaterThan(0);
  });

  it("muestra mensaje cuando no hay productos", () => {
    renderComponent({ loading: false, currentProducts: [] });
    expect(screen.getByText("No hay productos disponibles")).toBeDefined();
  });

  it("muestra loading correctamente", () => {
    renderComponent({ loading: true, currentProducts: [] });
    const spinner = document.querySelector("div.animate-spin");
    expect(spinner).toBeDefined();
    expect(spinner?.classList.contains("animate-spin")).toBe(true);
  });
});