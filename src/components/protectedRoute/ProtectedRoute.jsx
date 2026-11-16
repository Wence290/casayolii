import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { adminUid } from "../../firebase/config";

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!user || user.uid !== adminUid) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;