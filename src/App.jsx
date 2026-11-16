import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/Shop.css";

import Layout from "./components/layout/Layout";
import Inicio from "./components/inicio/Inicio";
import QuienesSomos from "./components/quienessomos/QuienesSomos";
import Ubicacion from "./components/ubicacion/Ubicacion";
import Hyt from "./components/hyt/Hyt";
import Contacto from "./components/contacto/Contacto";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Admin from "./components/admin/Admin";
import ProductSuccess from "./components/productSuccess/ProductSuccess";

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
      {/* Página de inicio */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      {/* Catálogo */}
      <Route
        path="/productos"
        element={
          <Layout>
            <ItemListContainer />
          </Layout>
        }
      />

      {/* Detalle del producto */}
      <Route
        path="/item/:id"
        element={
          <Layout>
            <ItemDetailContainer />
          </Layout>
        }
      />

      {/* Carrito */}
      <Route
        path="/cart"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Administración */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />

      {/* Confirmación de alta */}
      <Route
        path="/admin/products/success/:id"
        element={
          <ProtectedRoute>
            <ProductSuccess />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;