import "./Ubicacion.css";

function Ubicacion() {
  return (
    <section id="ubicacion" className="ubicacion">

      <div className="ubicacion-texto">
        <p className="etiqueta">VISITANOS</p>

        <h2>Dónde estamos</h2>

        <p>
          Estamos en Palermo, Ciudad Autónoma de Buenos Aires, Argentina.
        </p>

        <p className="direccion">
          Thames 1890
        </p>
      </div>

      <div className="mapa">
        <iframe
          src="https://www.google.com/maps?q=Thames+1890,+Buenos+Aires,+Argentina&output=embed"
          title="Ubicación CasaYoli"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

    </section>
  );
}

export default Ubicacion;