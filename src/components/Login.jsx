import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgLogin from "../assets/fondogym1.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const err = await response.json();
        setError(err.error || "Error al iniciar sesión");
        return;
      }

      // Traemos la info del usuario
      const userRes = await fetch("http://localhost:8080/api/auth/me", {
        credentials: "include",
      });

      if (!userRes.ok) {
        setError("No se pudo obtener la información del usuario");
        return;
      }

      const userData = await userRes.json();

      // Redirigimos a /inicio y pasamos el usuario como state
      navigate("/inicio", { state: { usuario: userData.usuario } });
    } catch (err) {
      console.error("Error en login:", err);
      setError("Error al conectar con el servidor");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#111111] to-[#4a4a4a]">
      {/* DESKTOP / TABLET */}
      <div className="hidden md:flex w-full max-w-6xl h-[83vh] overflow-hidden shadow-2xl ">
        {/* LADO IZQUIERDO - LOGIN */}
        <div className="w-[40%] bg-black flex flex-col items-center justify-center p-10 relative">
          <div className="absolute top-6 left-6 flex items-center space-x-2">
            <span className="text-yellow-400 font-semibold text-1xl">
              GymMaster
            </span>
          </div>

          <h1 className="text-4xl font-thin text-white mb-8 mt-14">
            Iniciar sesión
          </h1>

          {error && (
            <div className="mb-4 text-red-400 bg-red-900 bg-opacity-30 p-3 rounded-md text-sm text-center w-full">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-md">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mt-1 px-4 py-3 bg-gray-800 text-white rounded-2xl border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full mt-1 px-4 py-3 bg-gray-800 text-white rounded-2xl border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="********"
              />
            </div>
            {/* RECORDAR CONTRASEÑA TOGGLE */}
            <div className="flex items-center justify-between mt-8 mb-8">
              <span className="text-gray-300 font-medium text-sm">
                Recordar contraseña
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-800 rounded-full peer peer-checked:bg-yellow-400 transition-all duration-300"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform duration-300"></div>
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-1 py-3 bg-gradient-to-r from-yellow-400 to-orange-300 hover:from-yellow-500 hover:to-orange-400 text-gray-900 font-bold rounded-2xl shadow-lg transition duration-300"
            >
              Ingresar
            </button>
          </form>

          <div className="mt-10 text-center text-sm text-gray-400 w-full">
            <a href="#" className="text-yellow-400 hover:underline block mb-2">
              ¿Olvidaste tu contraseña?
            </a>
            <p className="text-base">
              ¿No tenés cuenta?{" "}
              <a href="/register" className="text-yellow-400 hover:underline">
                Registrate
              </a>
            </p>
          </div>
          {/* FOOTER */}
          <p className="mt-18 text-gray-300 text-xs text-center">
            © 2025 GymMaster. Todos los derechos reservados.
          </p>
        </div>

        {/* LADO DERECHO - IMAGEN + FRASE */}
        <div
          className="w-[60%] relative flex items-end justify-end"
          style={{
            backgroundImage: `url(${bgLogin})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-lg px-15 mb-20 text-right">
            <h2 className="text-3xl text-white font-serif mb-4">
              Entrená con disciplina.
              <br />
              Reservá. Cumplí. Repetí.
            </h2>
            <p className="text-gray-200 font-thin text-base">
              Gestioná tus turnos de musculación de forma rápida y segura.
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex md:hidden flex-col min-h-screen w-full bg-gray-200 items-center justify-center px-4">
        {/* LOGO + NOMBRE */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-yellow-500 font-mono text-2xl ">
            Bienvenido a GymMaster
          </span>
        </div>

        {/* TÍTULO DE BIENVENIDA */}

        <p className="text-gray-500 text-center mb-10 w-50 text-sm">
          Inicia sesión para comenzar con tus entrenamientos
        </p>

        {/* FORMULARIO */}
        {error && (
          <div className="mb-4 text-red-500 bg-red-100 p-3 rounded-lg text-sm text-center w-full">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-200"
            />
          </div>
          {/* RECORDAR CONTRASEÑA TOGGLE */}
          <div className="flex items-center justify-between mt-8 mb-8">
            <span className="text-gray-700 font-medium text-sm">
              Recordar contraseña
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-yellow-400 transition-all duration-300"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform duration-300"></div>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-300 hover:from-yellow-500 hover:to-orange-400 text-gray-900 font-bold rounded-2xl shadow-lg transition duration-300"
          >
            Ingresar
          </button>
        </form>

        {/* LINKS */}
        <div className=" pt-15 text-center text-sm text-gray-500 w-full max-w-md">
          <a href="#" className="text-yellow-500 hover:underline block mb-2">
            ¿Olvidaste tu contraseña?
          </a>
          <p className="text-gray-600">
            ¿No tenés cuenta?{" "}
            <a href="/register" className="text-yellow-500 hover:underline">
              Registrate
            </a>
          </p>
        </div>
        {/* FOOTER */}
        <p className="mt-20  text-gray-600 text-xs text-center">
          © 2025 GymMaster. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
