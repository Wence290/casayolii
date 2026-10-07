import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>Casayoli</h3>
        <p>Taller de cerámica en Palermo, Buenos Aires.</p>
      </div>

      <div className="footer-equipo">
        <div className="footer-card">
          <h4>Emma</h4>
          <p>Profesora</p>
        </div>

        <div className="footer-card">
          <h4>Delfina</h4>
          <p>Profesora</p>
        </div>

        <div className="footer-card">
          <h4>Lucia</h4>
          <p>Administradora</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;