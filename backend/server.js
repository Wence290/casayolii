const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, "casayoli.db");

const db = new sqlite3.Database(dbPath, (error) => {
  if (error) {
    console.error("Error al conectar con SQLite:", error.message);
  } else {
    console.log("Conectado a SQLite");
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS turnos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fecha TEXT NOT NULL,
      hora_inicio TEXT NOT NULL,
      hora_fin TEXT NOT NULL,
      tipo_clase TEXT NOT NULL,
      cupo_maximo INTEGER NOT NULL DEFAULT 8
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS reservas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      turno_id INTEGER NOT NULL,
      nombre TEXT NOT NULL,
      apellido TEXT NOT NULL,
      edad INTEGER,
      email TEXT NOT NULL,
      telefono TEXT,
      fecha_reserva DATETIME DEFAULT CURRENT_TIMESTAMP,

      FOREIGN KEY (turno_id)
        REFERENCES turnos(id)
        ON DELETE CASCADE
    )
  `);
});

app.get("/", (req, res) => {
  res.json({
    mensaje: "API de Casayoli funcionando",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});