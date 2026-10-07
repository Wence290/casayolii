import "./QuienesSomos.css";
import taller from "../../assets/taller.jpg";

function QuienesSomos() {
  return (
    <section id="quienes-somos" className="quienes-somos">

      <div className="quienes-contenido">
        <p className="etiqueta">EL TALLER</p>

        <h2>Quiénes somos</h2>

        <p className="descripcion">
          CASAYOLÍ es un espacio dedicado a la cerámica,
          la creatividad y el encuentro.
        </p>

        <p className="descripcion">
          Un lugar para aprender, experimentar y crear con
          las manos en un ambiente relajado y cercano.
        </p>
      </div>

      <div className="quienes-imagen">
        <img src={taller} alt="Foto del taller" />
      </div>

    </section>
  );
}

export default QuienesSomos;