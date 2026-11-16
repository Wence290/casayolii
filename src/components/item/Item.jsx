import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <article className="shop-card">
      <img
        src={product.imagen}
        alt={product.nombre}
      />

      <div className="shop-card-content">
        <h2>{product.nombre}</h2>

        <p className="shop-price">
          ${product.precio.toLocaleString("es-AR")}
        </p>

        <Link
          className="shop-button"
          to={`/item/${product.id}`}
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}

export default Item;