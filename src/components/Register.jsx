import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgLogin from "../assets/fondogym2.jpg";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, apellido, email, password }),
      });

      if (!res.ok) throw new Error("Error al registrarse");

      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="min-h-screen">
      {/* DESKTOP / TABLET */}
      <div className="hidden md:flex items-center justify-center bg-cover bg-center px-4 min-h-screen bg-gradient-to-br from-[#4a4a4a] to-[#111111] ">
        <div className="flex w-full max-w-6xl h-[83vh] shadow-2xl overflow-hidden">
          {/* FORMULARIO LADO IZQUIERDO */}
          <div className="w-[40%] bg-black flex flex-col items-center justify-center p-10 relative">
            <div className="absolute top-6 left-6 flex items-center space-x-2">
              <span className="text-yellow-400 font-semibold text-1xl">
                GymMaster
              </span>
            </div>

            <h1 className="text-4xl font-thin text-white mb-8 text-center mt-10">
              Registrate
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5 w-full">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Apellido
                </label>
                <input
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                  placeholder="Tu apellido"
                  className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="correo@ejemplo.com"
                  className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="********"
                  className="w-full px-4 py-2 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-300 hover:from-yellow-500 hover:to-orange-400 text-gray-900 font-bold rounded-2xl shadow-lg transition duration-300"
              >
                Registrarme
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              ¿Ya tenés cuenta?{" "}
              <a href="/" className="text-yellow-400 hover:underline">
                Iniciá sesión
              </a>
            </p>

            <p className="mt-10 text-gray-300 text-xs text-center">
              © 2025 GymMaster. Todos los derechos reservados.
            </p>
          </div>

          {/* IMAGEN + FRASE LADO DERECHO */}
          <div
            className="w-[60%] relative flex items-center justify-start"
            style={{
              backgroundImage: `url(${bgLogin})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative max-w-lg mb-20 text-center ml-10">
              <h2 className="text-4xl text-white font-serif mb-4">
                Tu progreso empieza ahora
              </h2>
              <p className="text-gray-200 font-thin text-base">
                Registrate, reserva tu lugar, entrena enfocado y convertite en
                tu mejor versión.{" "}
                <span className="text-yellow-300 font-mono">
                  ¡Bienvenido a GymMaster!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex md:hidden flex-col min-h-screen w-full bg-gray-200 items-center justify-center px-4">
        {/* LOGO + NOMBRE */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-yellow-500 font-mono text-2xl">
            Bienvenido a GymMaster
          </span>
        </div>

        {/* TÍTULO DE BIENVENIDA */}
        <p className="text-gray-500 text-center mb-10 w-60 text-sm">
          Registrate para comenzar con tu nueva forma de vida
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              placeholder="Tu nombre"
              className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Apellido
            </label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
              placeholder="Tu apellido"
              className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="correo@ejemplo.com"
              className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="********"
              className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-200"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-300 hover:from-yellow-500 hover:to-orange-400 text-gray-900 font-bold rounded-2xl shadow-lg transition duration-300"
          >
            Registrarme
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500 w-full max-w-md">
          ¿Ya tenés cuenta?{" "}
          <a href="/" className="text-yellow-500 hover:underline">
            Iniciá sesión
          </a>
        </p>

        <p className="mt-10 text-gray-400 text-xs text-center">
          © 2025 GymMaster. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
