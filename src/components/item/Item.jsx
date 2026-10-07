import { Link } from "react-router-dom";
import "./Item.css";

function Item({ id, nombre, precio, descripcion, color, imagen }) {
  return (
    <article className="item">
      <img src={imagen} alt={nombre} />

      <h3>{nombre}</h3>

      <p>{descripcion}</p>

      <p>Color: {color}</p>

      <strong>${precio}</strong>

      <Link to={`/producto/${id}`}>
        Ver detalle
      </Link>
    </article>
  );
}

export default Item;