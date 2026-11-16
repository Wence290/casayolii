import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  const addToCart = (producto, cantidad) => {
    if (!Number.isInteger(cantidad) || cantidad < 1) return;

    setCarrito((carritoActual) => {
      const productoEnCarrito = carritoActual.find(
        (item) => item.id === producto.id
      );

      const cantidadAnterior = productoEnCarrito
        ? productoEnCarrito.cantidad
        : 0;

      if (cantidadAnterior + cantidad > producto.stock) {
        return carritoActual;
      }

      if (productoEnCarrito) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }

      return [...carritoActual, { ...producto, cantidad }];
    });
  };

  const removeFromCart = (id) => {
    setCarrito((carritoActual) =>
      carritoActual.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCarrito([]);
  };

  const checkout = () => {
    if (carrito.length === 0) return;

    alert("¡Compra simulada con éxito! Gracias por elegir Casa Yoli.");

    clearCart();

    navigate("/productos");
  };

  const cantidadTotal = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  const precioTotal = carrito.reduce(
    (total, producto) =>
      total + producto.precio * producto.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        carrito,
        addToCart,
        removeFromCart,
        clearCart,
        checkout,
        cantidadTotal,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;