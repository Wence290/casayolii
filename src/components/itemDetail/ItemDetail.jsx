import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";

function ItemDetail({ product }) {
  const { carrito, addToCart } = useContext(CartContext);

  const productoEnCarrito = carrito.find(
    (item) => item.id === product.id
  );

  const cantidadEnCarrito = productoEnCarrito
    ? productoEnCarrito.cantidad
    : 0;

  const stockDisponible = Math.max(
    0,
    product.stock - cantidadEnCarrito
  );

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
  };

  return (
    <section className="shop-detail">

      <Link className="shop-back" to="/productos">
        ← Volver al catálogo
      </Link>

      <div className="detail-container">

        <div className="detail-image">
          <img
            src={product.imagen}
            alt={product.nombre}
          />
        </div>

        <div className="detail-info">
          <span className="detail-label">
            CERÁMICA ARTESANAL
          </span>

          <h1>{product.nombre}</h1>

          <h2 className="detail-price">
            ${product.precio.toLocaleString("es-AR")}
          </h2>

          <p className="detail-description">
            {product.descripcion}
          </p>

          <p>Color: {product.color}</p>

          <p className="detail-stock">
            Stock disponible: {stockDisponible}
          </p>

          <ItemCount
            key={`${product.id}-${stockDisponible}`}
            stock={stockDisponible}
            onAdd={handleAdd}
          />

          {cantidadEnCarrito > 0 && (
            <div className="detail-added">
              <p>
                Unidades en el carrito: {cantidadEnCarrito}
              </p>

              <Link to="/cart">Ver mi carrito →</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;