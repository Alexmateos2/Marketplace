import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import CategoriesNavbar from "../shared/navbar/categoriesNavbar";

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <CategoriesNavbar />
    </MemoryRouter>
  );

describe("CategoriesNavbar - funcionalidad y usabilidad", () => {
  it("Renderiza el botón de Categorías", () => {
    renderNavbar();
    const buttons = screen.getAllByRole("button", { name: /categorías/i });
    expect(buttons[0]).toBeDefined();
  });

  it("Abre y cierra el menú al hacer click", () => {
    renderNavbar();
    const button = screen.getAllByRole("button", { name: /categorías/i })[0];

    // Inicialmente el menú no debe estar en el DOM
    expect(screen.queryByText("Todas las categorías")).toBeNull();

    // Abrir menú
    fireEvent.click(button);
    expect(screen.getByText("Todas las categorías")).toBeDefined();

    // Cerrar menú
    fireEvent.click(button);
    expect(screen.queryByText("Todas las categorías")).toBeNull();
  });

  describe("CategoriesNavbar - navegación", () => {
    it("Muestra los links al abrir el menú y verifica href", () => {
      renderNavbar();

      const button = screen.getAllByRole("button", { name: /categorías/i })[0];
      fireEvent.click(button);

      // Ahora los links están visibles
      const tecladosLink = screen.getByRole("link", { name: /teclados/i });
      expect(tecladosLink).toBeDefined();
      expect(tecladosLink.getAttribute("href")).toBe("/products/Teclados");

      // Simular click
      fireEvent.click(tecladosLink);
      expect(tecladosLink.getAttribute("href")).toBe("/products/Teclados");
    });
  });

  it("Cierra el menú correctamente y los links desaparecen", () => {
    renderNavbar();

    const button = screen.getAllByRole("button", { name: /categorías/i })[0];

    // Abrir menú
    fireEvent.click(button);

    // Link visible
    const tecladosLink = screen.getByRole("link", { name: /teclados/i });
    expect(tecladosLink).toBeDefined();

    // Cerrar menú
    fireEvent.click(button);

    // Verificar que el link ya no está en el DOM
    const linkAfterClose = screen.queryByRole("link", { name: /teclados/i });
    expect(linkAfterClose).toBeNull();
  });
});
