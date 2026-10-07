import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/layout/Layout";
import Inicio from "./components/inicio/Inicio";
import QuienesSomos from "./components/quienessomos/QuienesSomos";
import Ubicacion from "./components/ubicacion/Ubicacion";
import Hyt from "./components/hyt/Hyt";
import Contacto from "./components/contacto/Contacto";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";

function Home() {
  return (
    <>
      <Inicio />
      <QuienesSomos />
      <Ubicacion />
      <Hyt />
      <Contacto />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/productos"
        element={
          <Layout>
            <ItemListContainer />
          </Layout>
        }
      />

      <Route
        path="/producto/:id"
        element={
          <Layout>
            <ItemDetailContainer />
          </Layout>
        }
      />

      <Route
        path="/carrito"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;