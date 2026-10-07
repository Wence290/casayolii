import "./Inicio.css";
import logoCasayoli from "../../assets/logo-casayoli.png";

function Inicio() {
  return (
    <section id="inicio" className="inicio">
      <div className="inicio-contenido">

        <img
          src={logoCasayoli}
          alt="CASAYOLÍ"
          className="logo-principal"
        />

        <p>Taller y espacio de cerámica</p>

        <a href="#quienes-somos" className="boton-principal">
          Conocé el taller
        </a>
      </div>
    </section>
  );
}

export default Inicio;