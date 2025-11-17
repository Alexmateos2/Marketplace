import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { describe, it, expect, vi } from "vitest";
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
    vi.useFakeTimers();
    renderNavbar();
    const button = screen.getAllByRole("button", { name: /categorías/i })[0];

    // Abrir menú
    fireEvent.click(button);
    expect(screen.queryByRole("link", { name: /teclados/i })).toBeDefined();

    // Cerrar menú
    fireEvent.click(button);

    // Avanzar tiempo para que se ejecute el setTimeout de 200ms
    vi.advanceTimersByTime(250);

    // Verificar que desaparece
    expect(screen.queryByRole("link", { name: /teclados/i })).toBeNull();

    vi.useRealTimers();
  });
});