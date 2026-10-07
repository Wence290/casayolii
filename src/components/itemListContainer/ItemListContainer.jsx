import { useEffect, useState } from "react";
import Item from "../item/Item.jsx";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudieron cargar los productos");
        }

        return response.json();
      })
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="productos-container">
      <h1>Productos</h1>
      <p>Conocé nuestras piezas de cerámica.</p>

      <div className="productos-grid">
        {productos.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            descripcion={producto.descripcion}
            color={producto.color}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;