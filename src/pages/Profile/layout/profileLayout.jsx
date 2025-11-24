import Navbar from "../../../shared/navbar/navbar";
import Footer from "../../../shared/utils/Footer";
import { useNavigate } from "react-router-dom";
import AsideProfile from "../components/asideProfile";
import FormProfile from "../components/formProfile";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const ProfilePage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("usuario");
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    if (!userId) {
      navigate("/");
      return;
    } else
      fetch(`http://localhost:3000/usuarios/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUsuario(data);
        })
        .catch((error) => {
          toast.error("Error al obtener el usuario:", error);
        });
  }, [navigate, userId]);

  return (
    <div className=" font-display transition-colors bg-background-light dark:bg-background-dark">
      <Navbar />
      <div className="flex min-h-screen ">
        <AsideProfile usuario={usuario} />
        <main className="flex-1 p-4 sm:p-10 lg:pl-90  lg:pt-20">
          <FormProfile usuario={usuario} />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
