import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import "./CartWidget.css";

function CartWidget() {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link to="/carrito" className="cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{cantidadTotal}</span>
    </Link>
  );
}

export default CartWidget;