import React from "react";
import Navbar from "../../shared/navbar/navbar";
import Footer from "../../shared/utils/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUpLayout = () => {
  const [formValue, setFormValue] = useState({
    nombre: "",
    email: "",
    password: "",
    passwordCheck: "",
    direccion: "",
    telefono: "",
  });
const [isMayusPassword, setIsMayusPassword] = useState(false);
const [isMayusPasswordCheck, setIsMayusPasswordCheck] = useState(false);


  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
const onKeyDown = (e) => {
  const isCaps = e.getModifierState("CapsLock");

  if (e.target.id === "password") {
    setIsMayusPassword(isCaps);
  } else if (e.target.id === "passwordCheck") {
    setIsMayusPasswordCheck(isCaps);
  }
};
  const handleChangeInput = (e) => {
    setFormValue({
      ...formValue,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, email, password, direccion, telefono } = formValue;
    setLoading(true);
    if (password === formValue.passwordCheck) {
      try {
        const res = await fetch("http://localhost:3000/usuarios", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre,
            email,
            password,
            direccion,
            telefono,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.message || "No se ha podido crear el usuario");
        } else {
          console.log("Usuario creado exitosamente:", data);
          localStorage.setItem("usuario", JSON.stringify(data.usuario));
          navigate("/");
        }
      } catch (err) {
        console.error(err);
        alert("Error de conexión al servidor");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <div className="font-display transition-colors bg-background-light dark:bg-background-dark">
      <Navbar />
      <main className="md:w-full w-4/5 max-w-lg bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-border-light dark:border-border-dark p-6 my-24 mx-auto">
        <div className="flex flex-col gap-2 text-center p-2 mb-8">
          <p className="text-content-light dark:text-content-dark text-3xl font-black leading-tight tracking-[-0.033em]">
            Create Your Tekia Account
          </p>
          <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal">
            Get access to a curated selection of expert-approved products.
          </p>
        </div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal pb-2">
              Full Name
            </p>
            <input
              id="nombre"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-sm font-normal leading-normal"
              placeholder="Enter your full name"
              value={formValue.nombre}
              onChange={handleChangeInput}
            />
          </label>
          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal pb-2">
              Email Address
            </p>
            <input
              id="email"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-sm font-normal leading-normal"
              placeholder="Enter your email address"
              type="email"
              value={formValue.email}
              onChange={handleChangeInput}
            />
          </label>
          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal pb-2">
              Password
            </p>
            <div className="relative w-full flex flex-col ">
              <input
                id="password"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 pr-10 text-sm font-normal leading-normal"
                placeholder="Enter a secure password"
                type="password"
                value={formValue.password}
                onKeyDown={onKeyDown}
                onChange={handleChangeInput}
              />
             {isMayusPassword && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                  ⚠️ Caps Lock is ON
                </p>
              )}
            </div>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal pb-2">
              Confirm Password
            </p>
            <div className="relative w-full flex flex-col">
              <input
                id="passwordCheck"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 pr-10 text-sm font-normal leading-normal"
                placeholder="Repite la contraseña"
                type="password"
                onChange={handleChangeInput}
                onKeyDown={onKeyDown}
                value={formValue.passwordCheck}
              />
              {isMayusPasswordCheck  && (
                <p className="text-red-500 dark:text-red-400 text-sm mt-2">
                  ⚠️ Caps Lock is ON
                </p>
              )}
            </div>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal pb-2">
              Shipping Address
            </p>
            <textarea
              id="direccion"
              className="form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary min-h-[96px] placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-sm font-normal leading-normal"
              placeholder="Enter your full shipping address"
              value={formValue.direccion}
              onChange={handleChangeInput}
            ></textarea>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-content-light dark:text-content-dark text-sm font-medium leading-normal pb-2">
              Phone Number
            </p>
            <div className="flex w-full items-stretch">
              <input
                id="telefono"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-content-light dark:text-content-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-sm font-normal leading-normal"
                placeholder="Ej: 674 242 532"
                type="tel"
                value={formValue.telefono}
                onChange={handleChangeInput}
              />
            </div>
          </label>
          <button
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors duration-200 mt-2"
            type="submit"
            disabled={loading}
          >
            <span className="truncate">Create Account</span>
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            By creating an account, you agree to our{" "}
            <a className="font-medium text-primary hover:underline" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="font-medium text-primary hover:underline" href="#">
              Privacy Policy
            </a>
            .
          </p>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Already have an account?{" "}
            <a className="font-bold text-primary hover:underline" href="#">
              Log in
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpLayout;
