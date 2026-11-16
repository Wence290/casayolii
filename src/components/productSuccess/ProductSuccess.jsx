import { useParams, Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

function ProductSuccess() {
  const { id } = useParams();

  return (
    <section className="admin-success">

      <div className="success-card">

        <FiCheckCircle size={75} />

        <h1>¡Producto cargado correctamente!</h1>

        <p>Tu producto ya está disponible en el catálogo.</p>

        <p className="success-id">
          ID del producto: {id}
        </p>

        <div className="success-actions">

          <Link className="shop-button" to={`/item/${id}`}>
            Ver producto
          </Link>

          <Link className="admin-logout" to="/admin">
            Agregar otro producto
          </Link>

          <Link className="admin-logout" to="/productos">
            Ir al catálogo
          </Link>

        </div>
      </div>
    </section>
  );
}

export default ProductSuccess;