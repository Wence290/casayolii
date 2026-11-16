import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import ProductFormContainer from "../productFormContainer/ProductFormContainer";

function Admin() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <section className="admin-panel">

      <div className="admin-topbar">

        <div>
          <span className="admin-label">CASA YOLI</span>

          <h1>Panel de administración</h1>

          <p>Bienvenido a Casa Yoli</p>
          <p>{user.email}</p>
        </div>

        <div className="admin-actions">

          <Link className="shop-button" to="/productos">
            Ver catálogo
          </Link>

          <button
            className="admin-logout"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>

        </div>
      </div>

      <ProductFormContainer />

    </section>
  );
}

export default Admin;