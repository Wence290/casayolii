import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";
import { CartContext } from "../../context/CartContext";

function Cart() {
  const {
    carrito,
    removeFromCart,
    clearCart,
    checkout,
    precioTotal,
    cantidadTotal
  } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <section className="shop-cart cart-empty">

        <FiShoppingBag size={65} />

        <h1>Tu carrito está vacío</h1>

        <p>Descubrí nuestras piezas de cerámica artesanal.</p>

        <Link className="shop-button" to="/productos">
          Ver productos
        </Link>

      </section>
    );
  }

  return (
    <section className="shop-cart">

      <h1>Mi carrito</h1>

      <div className="cart-layout">

        {/* Productos del carrito */}

        <div className="cart-products">

          {carrito.map((producto) => (
            <article className="cart-item" key={producto.id}>

              <img
                src={producto.imagen}
                alt={producto.nombre}
              />

              <div className="cart-item-info">

                <h2>{producto.nombre}</h2>

                <p>
                  Precio unitario: $
                  {producto.precio.toLocaleString("es-AR")}
                </p>

                <p>Cantidad: {producto.cantidad}</p>

                <strong>
                  $
                  {(producto.precio * producto.cantidad)
                    .toLocaleString("es-AR")}
                </strong>

              </div>

              <button
                className="cart-remove"
                onClick={() => removeFromCart(producto.id)}
                aria-label={`Eliminar ${producto.nombre}`}
              >
                <FiTrash2 size={20} />
              </button>

            </article>
          ))}

        </div>

        {/* Resumen de compra */}

        <aside className="cart-summary">

          <h2>Resumen de compra</h2>

          <p>Total de unidades: {cantidadTotal}</p>

          <hr />

          <p>Total de la compra</p>

          <h2 className="cart-total">
            ${precioTotal.toLocaleString("es-AR")}
          </h2>

          {/* Finalizar compra */}

          <button
            className="shop-button cart-checkout"
            onClick={checkout}
          >
            Finalizar compra
          </button>

          <p className="checkout-notice">
            Compra simulada. No se realizará ningún cobro.
          </p>

          <Link className="shop-button" to="/productos">
            Seguir comprando
          </Link>

          <button
            className="cart-clear"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>

        </aside>

      </div>
    </section>
  );
}

export default Cart;