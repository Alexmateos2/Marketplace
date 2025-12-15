import { Navigate } from "react-router-dom";
// Proteccion de rutas 
const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("usuario"));
  const userRole = JSON.parse(localStorage.getItem("rol"));

  if (user && role && userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
