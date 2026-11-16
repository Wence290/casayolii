import "./Header.css";
import logoCasayoli from "../../assets/logo-casayoli.png";
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src={logoCasayoli} alt="CASAYOLI" />
      </Link>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <a href="/#contacto">Contacto</a>
        <a href="/#ubicacion">Ubicación</a>
        <a href="/#hyt">HYT</a>

        <CartWidget />
      </nav>
    </header>
  );
}

export default Header;