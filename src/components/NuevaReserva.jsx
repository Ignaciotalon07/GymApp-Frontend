import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import fondonuevareserva from "../assets/fondonuevareserva.jpg";

export default function NuevaReserva() {
  const [usuario, setUsuario] = useState(null);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Generar horarios de 07:00 a 22:00
  const horariosDisponibles = [];
  for (let i = 7; i < 22; i++) {
    const inicio = i.toString().padStart(2, "0") + ":00";
    const fin = (i + 1).toString().padStart(2, "0") + ":00";
    horariosDisponibles.push(`${inicio} - ${fin}`);
  }

  // Obtener info usuario logueado
  useEffect(() => {
    fetch("http://localhost:8080/api/auth/me", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("No autenticado");
        return res.json();
      })
      .then((data) => setUsuario(data.usuario))
      .catch(() => setUsuario(null));

    // Setear fecha actual por defecto
    const hoy = new Date();
    const yyyy = hoy.getFullYear();
    const mm = String(hoy.getMonth() + 1).padStart(2, "0");
    const dd = String(hoy.getDate()).padStart(2, "0");
    setFecha(`${yyyy}-${mm}-${dd}`);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!hora) {
      setError("Por favor seleccioná un horario.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/reservas", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fecha, hora }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al guardar reserva");
      }

      navigate("/reservas");
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  }

  return (
    <>
      {usuario && <Nav usuario={usuario} />}

      {/* Contenedor principal que ocupa toda la pantalla */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${fondonuevareserva})` }}
        >
          {/* Overlay opcional si querés oscurecer un poco la imagen */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Cajita del formulario encima */}
        <div className="relative z-10 w-full max-w-lg p-6  rounded-xl bg-gray-800/90 shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-yellow-400 mb-2">
              Nueva Reserva
            </h1>
            <p className="text-white">¿A qué hora vas a venir al gym hoy?</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-700 text-white rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Mostrar fecha actual */}
            <div className="form-groupNueva">
              <label className="block mb-1 text-gray-300">Fecha</label>
              <input
                type="text"
                value={fecha}
                disabled
                className="form-control w-full px-3 py-2 rounded bg-gray-700 text-white"
              />
            </div>

            {/* Selección de horario */}
            <div className="form-groupNueva">
              <label htmlFor="hora" className="block mb-1 text-gray-300">
                Horario
              </label>
              <select
                id="hora"
                name="hora"
                required
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                className="form-control w-full px-3 py-2 rounded bg-gray-700 text-white"
              >
                <option value="">Seleccioná un horario</option>
                {horariosDisponibles.map((h, index) => (
                  <option key={index} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded"
            >
              Guardar reserva
            </button>
          </form>

          <button
            onClick={() => navigate("/reservas")}
            className="mt-4 text-blue-400 hover:underline"
          >
            Volver al listado
          </button>
        </div>
      </div>
    </>
  );
}
