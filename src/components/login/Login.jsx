import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { adminUid } from "../../firebase/config";

function Login() {
  const { user, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.uid === adminUid) {
      navigate("/admin", { replace: true });
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await login(
        formData.email,
        formData.password
      );

      if (result.user.uid !== adminUid) {
        await logout();
        setError("Usuario no autorizado.");
      }

    } catch {
      setError("Correo electrónico o contraseña incorrectos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="admin-login">
      <h1>Administración Casa Yoli</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Correo electrónico</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Contraseña</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </button>
      </form>
    </section>
  );
}

export default Login;