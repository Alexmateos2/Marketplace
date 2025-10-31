// ProfilePage.jsx

import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";

import AsideProfile from "../components/asideProfile";
import FormProfile from "../components/formProfile";
import { useEffect, useState } from "react";
const ProfilePage = () => {
  const userId = localStorage.getItem("usuario");
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/usuarios/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUsuario(data);
      })
      .catch((error) => {
        console.error("Error al obtener el usuario:", error);
      });
  }, [userId]);

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <Navbar />
      <div className="flex min-h-screen  font-display bg-background-light dark:bg-background-dark text-text-light dark:text-white transition-colors">
        <AsideProfile usuario={usuario} />
        <main className="flex-1 p-4 sm:p-6 lg:p-10">
          <FormProfile usuario={usuario} />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
