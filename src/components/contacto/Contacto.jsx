import "./Contacto.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <p className="etiqueta">HABLEMOS</p>

      <h2>Contacto</h2>

      <p className="contacto-texto">
        ¿Querés conocer el taller o hacernos una consulta?
        Escribinos y te contamos más sobre CASAYOLÍ.
      </p>

      <div className="contacto-links">
        <a
          href="https://www.instagram.com/taller.casayoli/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram de CASAYOLÍ"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp de CASAYOLÍ"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}

export default Contacto;