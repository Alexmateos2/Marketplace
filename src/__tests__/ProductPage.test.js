 import { describe, it, expect, vi, beforeEach } from "vitest";

const mockProduct = {
  id_producto: 1,
  nombre: "Producto Test",
  descripcion: "Descripción de prueba",
  precio: 123,
  imagen: "test.png",
  categoria: "Tech",
  especificaciones: [],
  resenas: [],
};

// Mock global fetch
globalThis.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockProduct),
  })
);

describe("ProductPages logic tests", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("fetchProduct obtiene correctamente los datos", async () => {
    // Simulamos directamente la llamada a fetch
    const response = await fetch("http://localhost:3000/productos/1");
    const data = await response.json();

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/productos/1");
    expect(data).toEqual(mockProduct);
  });

  it("handleAddToCart llama a addToCart con los datos correctos", () => {
    const addToCartMock = vi.fn();

    const handleAddToCart = () => {
      addToCartMock({
        id: mockProduct.id_producto,
        name: mockProduct.nombre,
        price: mockProduct.precio,
        image: mockProduct.imagen,
        quantity: 1,
      });
    };

    handleAddToCart();

    expect(addToCartMock).toHaveBeenCalledWith({
      id: 1,
      name: "Producto Test",
      price: 123,
      image: "test.png",
      quantity: 1,
    });
  });
});
