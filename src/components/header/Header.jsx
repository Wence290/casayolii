
import "./Header.css";
import logoCasayoli from "../../assets/logo-casayoli.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src={logoCasayoli} alt="CASAYOLÍ" />
      </Link>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <a href="/#contacto">Contacto</a>
        <a href="/#ubicacion">Ubicación</a>
        <a href="/#hyt">HYT</a>
      </nav>
    </header>
  );
}

export default Header;
