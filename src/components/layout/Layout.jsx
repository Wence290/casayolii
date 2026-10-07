import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;