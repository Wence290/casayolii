import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import { getProducts } from "../../services/productService";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
  <section className="shop-catalog">
    <div className="shop-heading">
      <span>HECHO A MANO · BUENOS AIRES</span>

      <h1>Nuestros productos</h1>

      <p>Piezas únicas para acompañar tus momentos.</p>
    </div>

    <ItemList products={products} />
  </section>
);
}

export default ItemListContainer;