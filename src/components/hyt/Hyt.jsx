import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Hyt.css";

function Hyt() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  const horariosPorDia = {
    2: [
      {
        horario: "17:30 - 19:00",
        tipo: "Infantil 7+",
        cupos: 5,
      },
    ],

    3: [
      {
        horario: "09:00 - 11:00",
        tipo: "General",
        cupos: 3,
      },

      {
        horario: "17:30 - 19:30",
        tipo: "General",
        cupos: 6,
      },
    ],

    5: [
      {
        horario: "17:30 - 19:30",
        tipo: "General",
        cupos: 2,
      },
    ],
  };

  const diaSemana = fechaSeleccionada.getDay();

  const horariosDisponibles =
    horariosPorDia[diaSemana] || [];

  return (
    <section id="hyt" className="hyt">

      <div className="hyt-contenido">

        <p className="etiqueta">
          HORARIOS Y TURNOS
        </p>

        <h2>
          Elegí tu clase
        </h2>

        <p className="hyt-descripcion">
          Seleccioná una fecha para consultar
          los horarios disponibles y reservar tu lugar.
        </p>

        <div className="hyt-grid">

          {/* CALENDARIO */}

          <div className="hyt-calendario">

            <Calendar
              onChange={setFechaSeleccionada}
              value={fechaSeleccionada}
            />

          </div>


          {/* TURNOS */}

          <div className="hyt-turnos">

            <h3>
              {fechaSeleccionada.toLocaleDateString(
                "es-AR",
                {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                }
              )}
            </h3>


            {horariosDisponibles.length > 0 ? (

              horariosDisponibles.map(
                (turno, index) => (

                  <div
                    className="turno-card"
                    key={index}
                  >

                    <div>

                      <h4>
                        {turno.horario}
                      </h4>

                      <p>
                        {turno.tipo}
                      </p>

                      <span>
                        {turno.cupos > 0
                          ? `${turno.cupos} cupos disponibles`
                          : "Sin cupos disponibles"}
                      </span>

                    </div>


                    <button
                      disabled={turno.cupos === 0}
                    >

                      {turno.cupos > 0
                        ? "Reservar"
                        : "Completo"}

                    </button>

                  </div>

                )
              )

            ) : (

              <div className="sin-clases">

                <p>
                  No hay clases disponibles
                  para este día.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hyt;