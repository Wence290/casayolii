import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import "./Cart.css";

function Cart() {
  const { carrito } = useContext(CartContext);

  const total = carrito.reduce(
    (acumulador, producto) =>
      acumulador + producto.precio * producto.cantidad,
    0
  );

  if (carrito.length === 0) {
    return (
      <section className="cart-container">
        <h1>Carrito</h1>

        <p>Tu carrito está vacío.</p>

        <Link to="/productos" className="cart-volver">
          Ver productos
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-container">
      <h1>Tu carrito</h1>

      <div className="cart-lista">
        {carrito.map((producto) => (
          <div className="cart-producto" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />

            <div className="cart-info">
              <h2>{producto.nombre}</h2>

              <p>{producto.descripcion}</p>

              <p>
                <strong>Color:</strong> {producto.color}
              </p>

              <p>
                <strong>Cantidad:</strong> {producto.cantidad}
              </p>

              <strong className="cart-precio">
                ${(producto.precio * producto.cantidad).toLocaleString("es-AR")}
              </strong>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <span>Total</span>

        <strong>
          ${total.toLocaleString("es-AR")}
        </strong>
      </div>
    </section>
  );
}

export default Cart;