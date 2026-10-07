import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo cargar el producto");
        }

        return response.json();
      })
      .then((data) => {
        const productoEncontrado = data.find(
          (producto) => producto.id === Number(id)
        );

        if (!productoEncontrado) {
          throw new Error("Producto no encontrado");
        }

        setProducto(productoEncontrado);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="detalle-container">
      <div className="detalle-card">
        <div className="detalle-imagen">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>

        <div className="detalle-info">
          <p className="detalle-id">Producto #{producto.id}</p>

          <h1>{producto.nombre}</h1>

          <p className="detalle-descripcion">
            {producto.descripcion}
          </p>

          <div className="detalle-color">
            <span>Color</span>
            <strong>{producto.color}</strong>
          </div>

          <div className="detalle-precio">
            <span>Precio</span>
            <strong>
              ${producto.precio.toLocaleString("es-AR")}
            </strong>
          </div>

          <button
            className="btn-carrito"
            onClick={() => addToCart(producto)}
          >
            Agregar al carrito
          </button>

          <Link to="/productos" className="volver-productos">
            ← Volver a productos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ItemDetailContainer;