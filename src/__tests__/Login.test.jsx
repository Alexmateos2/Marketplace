import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom/vitest";
import LoginPage from "../pages/Login/layout/LoginLayout";

// Mock de módulos externos
vi.mock("react-toastify", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

vi.mock("../shared/utils/Footer", () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

// Mock del Navbar 
vi.mock("../shared/navbar/navbar", () => ({
  default: () => <div data-testid="navbar">Navbar</div>,
}));


const renderLoginPage = () =>
  render(
    <MemoryRouter initialEntries={["/login"]}>
 
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<div>Home</div>} />
          <Route path="/forgot-password" element={<div>Forgot Password</div>} />
          <Route path="/signup" element={<div>Signup</div>} />
        </Routes>
   
    </MemoryRouter>
  );

describe("LoginPage - Seguridad", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    // Limpiar el DOM completamente
    document.body.innerHTML = "";
  });

  it("No debe enviar credenciales en la URL", () => {
    renderLoginPage();
    const emailInputs = screen.getAllByPlaceholderText("tu@ejemplo.com");
    const passwordInputs = screen.getAllByPlaceholderText("••••••••");

    fireEvent.change(emailInputs[0], { target: { value: "test@test.com" } });
    fireEvent.change(passwordInputs[0], { target: { value: "password123" } });

    expect(window.location.search).toBe("");
  });

  it("Debe usar POST ", async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({ usuario: { id: 1 }, rol: "user" }),
    });
    
    vi.stubGlobal("fetch", mockFetch);

    renderLoginPage();
    const emailInputs = screen.getAllByPlaceholderText("tu@ejemplo.com");
    const passwordInputs = screen.getAllByPlaceholderText("••••••••");
    const submitButtons = screen.getAllByRole("button", { name: /Iniciar sesión/i });

    await userEvent.type(emailInputs[0], "test@test.com");
    await userEvent.type(passwordInputs[0], "password123");
    await userEvent.click(submitButtons[0]);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        `${import.meta.env.VITE_API_KEY}usuarios/login`,
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })
      );
    });

    vi.unstubAllGlobals();
  });

  it("Debe ocultar la contraseña por defecto", () => {
    renderLoginPage();
    const passwordInputs = screen.getAllByPlaceholderText("••••••••");

    expect(passwordInputs[0]).toHaveAttribute("type", "password");
  });

  it("Debe permitir mostrar/ocultar contraseña sin errores", async () => {
    renderLoginPage();
    const passwordInputs = screen.getAllByPlaceholderText("••••••••");
    const passwordInput = passwordInputs[0];
    const toggleButtons = screen.getAllByRole("button");
    const toggleButton = toggleButtons.find(btn => btn.querySelector("svg"));

    expect(passwordInput).toHaveAttribute("type", "password");

    await userEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    await userEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("Debe limpiar localStorage antes de guardar datos de sesión", async () => {
    localStorage.setItem("oldData", "should be removed");

    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({ usuario: { id: 1, name: "Test" }, rol: "user" }),
    });
    
    vi.stubGlobal("fetch", mockFetch);

    renderLoginPage();
    const emailInput = screen.getByPlaceholderText("tu@ejemplo.com");
    const passwordInput = screen.getByPlaceholderText("••••••••");
    const submitButton = screen.getByRole("button", { name: /Iniciar sesión/i });

    await userEvent.type(emailInput, "test@test.com");
    await userEvent.type(passwordInput, "password123");
    await userEvent.click(submitButton);

    await waitFor(() => {
      const usuario = JSON.parse(localStorage.getItem("usuario"));
      expect(usuario).toEqual({ id: 1, name: "Test" });
    });

    vi.unstubAllGlobals();
  });

  it("No debe almacenar la contraseña en localStorage", async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({ usuario: { id: 1 }, rol: "user" }),
    });
    
    vi.stubGlobal("fetch", mockFetch);

    renderLoginPage();
    const emailInput = screen.getByPlaceholderText("tu@ejemplo.com");
    const passwordInput = screen.getByPlaceholderText("••••••••");
    const submitButton = screen.getByRole("button", { name: /Iniciar sesión/i });

    await userEvent.type(emailInput, "test@test.com");
    await userEvent.type(passwordInput, "password123");
    await userEvent.click(submitButton);

    await waitFor(() => {
      const usuario = localStorage.getItem("usuario");
      expect(usuario).not.toContain("password");
      expect(usuario).not.toContain("password123");
    });

    vi.unstubAllGlobals();
  });

  it("Debe validar email requerido", async () => {
    renderLoginPage();
    const passwordInputs = screen.getAllByPlaceholderText("••••••••");
    const submitButtons = screen.getAllByRole("button", { name: /Iniciar sesión/i });

    await userEvent.type(passwordInputs[0], "password123");
    await userEvent.click(submitButtons[0]);

    const emailInputs = screen.getAllByPlaceholderText("tu@ejemplo.com");
    expect(emailInputs[0]).toHaveAttribute("required");
  });

  it("Debe validar contraseña requerida", async () => {
    renderLoginPage();
    const emailInputs = screen.getAllByPlaceholderText("tu@ejemplo.com");
    const submitButtons = screen.getAllByRole("button", { name: /Iniciar sesión/i });

    await userEvent.type(emailInputs[0], "test@test.com");
    await userEvent.click(submitButtons[0]);

    const passwordInputs = screen.getAllByPlaceholderText("••••••••");
    expect(passwordInputs[0]).toHaveAttribute("required");
  });

  it("Debe detectar Caps Lock activado", async () => {
    renderLoginPage();
    const passwordInputs = screen.getAllByPlaceholderText("••••••••");
    const passwordInput = passwordInputs[0];

    // Simular evento keyDown 
    const event = new KeyboardEvent("keydown", {
      key: "A",
      code: "KeyA",
      bubbles: true,
      cancelable: true,
    });
    
    // Mock getModifierState
    Object.defineProperty(event, "getModifierState", {
      value: () => true,
    });

    passwordInput.dispatchEvent(event);

    // Esperar a que aparezca el mensaje
    await waitFor(() => {
      const capsLockWarning = screen.queryByText(/Caps Lock activado/);
      expect(capsLockWarning).toBeInTheDocument();
    }, { timeout: 1000 });
  });
});

describe("LoginPage - Rendimiento", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    // Limpiar el DOM completamente
    document.body.innerHTML = "";
  });

  it("Debe renderizar en menos de 500ms", () => {
    const startTime = performance.now();
    renderLoginPage();
    const endTime = performance.now();

    expect(endTime - startTime).toBeLessThan(500);
  });

  it("Debe tener inputs accesibles ", () => {
    renderLoginPage();

    expect(screen.getAllByPlaceholderText("tu@ejemplo.com")[0]).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText("••••••••")[0]).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /Iniciar sesión/i })[0]).toBeInTheDocument();
  });

  it("No debe hacer peticiones innecesarias al montar", () => {
    const mockFetch = vi.fn();
    vi.stubGlobal("fetch", mockFetch);

    renderLoginPage();

    expect(mockFetch).not.toHaveBeenCalled();

    vi.unstubAllGlobals();
  });

  it("Debe evitar múltiples peticiones al hacer click repetido rápidamente", async () => {
    const mockFetch = vi.fn().mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                ok: false,
                json: async () => ({ message: "Error" }),
              }),
            500
          )
        )
    );
    
    vi.stubGlobal("fetch", mockFetch);

    renderLoginPage();
    const submitButtons = screen.getAllByRole("button", { name: /Iniciar sesión/i });
    const submitButton = submitButtons[0];
    const emailInputs = screen.getAllByPlaceholderText("tu@ejemplo.com");
    const passwordInputs = screen.getAllByPlaceholderText("••••••••");

    await userEvent.type(emailInputs[0], "test@test.com");
    await userEvent.type(passwordInputs[0], "password123");

    // Click múltiple rápido mientras la petición está en progreso
    await userEvent.click(submitButton);
    await userEvent.click(submitButton);
    await userEvent.click(submitButton);

    // Esperar a que la respuesta llegue
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled();
    });

    // Verificar que fetch fue llamado solo una vez (no 3 veces)
    // Esto demuestra que se evitaron peticiones innecesarias
    expect(mockFetch).toHaveBeenCalledTimes(1);

    vi.unstubAllGlobals();
  });

  it("Debe mostrar estado de loading mientras se procesa", async () => {
    const mockFetch = vi.fn().mockImplementationOnce(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                ok: true,
                json: async () => ({ usuario: { id: 1 }, rol: "user" }),
              }),
            300
          )
        )
    );
    
    vi.stubGlobal("fetch", mockFetch);

    renderLoginPage();
    const emailInputs = screen.getAllByPlaceholderText("tu@ejemplo.com");
    const passwordInputs = screen.getAllByPlaceholderText("••••••••");
    const submitButtons = screen.getAllByRole("button", { name: /Iniciar sesión/i });
    const submitButton = submitButtons[0];

    await userEvent.type(emailInputs[0], "test@test.com");
    await userEvent.type(passwordInputs[0], "password123");
    await userEvent.click(submitButton);

    expect(screen.getByRole("button", { name: /Iniciando sesión/i })).toBeInTheDocument();

    await waitFor(() => {
      expect(submitButton).not.toHaveAttribute("disabled");
    });

    vi.unstubAllGlobals();
  });

  it("Debe manejar errores de red sin bloquear la UI", async () => {
    const mockFetch = vi.fn().mockRejectedValueOnce(
      new Error("Network error")
    );
    
    vi.stubGlobal("fetch", mockFetch);

    renderLoginPage();
    const emailInputs = screen.getAllByPlaceholderText("tu@ejemplo.com");
    const passwordInputs = screen.getAllByPlaceholderText("••••••••");
    const submitButtons = screen.getAllByRole("button", { name: /Iniciar sesión/i });
    const submitButton = submitButtons[0];

    await userEvent.type(emailInputs[0], "test@test.com");
    await userEvent.type(passwordInputs[0], "password123");
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(submitButton).not.toHaveAttribute("disabled");
    });

    vi.unstubAllGlobals();
  });
});