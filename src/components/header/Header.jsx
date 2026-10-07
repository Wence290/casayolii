import "./Header.css";
import logoCasayoli from "../../assets/logo-casayoli.png";
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget.jsx";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src={logoCasayoli} alt="CASAYOLÍ" />
      </Link>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <CartWidget />
      </nav>
    </header>
  );
}

export default Header;