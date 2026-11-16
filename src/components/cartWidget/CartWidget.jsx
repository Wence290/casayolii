import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link to="/cart">
      <FiShoppingCart size={24} />

      {cantidadTotal > 0 && (
        <span>{cantidadTotal}</span>
      )}
    </Link>
  );
}

export default CartWidget;