import { useState } from "react";

function ItemCount({ stock, onAdd }) {
  const [quantity, setQuantity] = useState(1);

  const sumar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const restar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (stock === 0) {
    return <p className="out-of-stock">Sin stock disponible</p>;
  }

  return (
    <div className="item-count">

      <span>Cantidad</span>

      <div className="quantity-selector">
        <button
          onClick={restar}
          disabled={quantity === 1}
        >
          −
        </button>

        <span>{quantity}</span>

        <button
          onClick={sumar}
          disabled={quantity === stock}
        >
          +
        </button>
      </div>

      <button
        className="shop-button"
        onClick={() => onAdd(quantity)}
      >
        Agregar al carrito
      </button>

    </div>
  );
}

export default ItemCount;