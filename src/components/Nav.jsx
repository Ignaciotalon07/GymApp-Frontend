import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile2 from "../assets/profile2.svg";
import pesa from "../assets/pesa.svg";
import home from "../assets/home.svg";
import contacto from "../assets/contacto.svg";
import ubicacion from "../assets/ubicacion.svg";
import { HashLink } from "react-router-hash-link";

export default function Nav({ usuario, email }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  if (!usuario) return null;

  const handleLogout = async () => {
    await fetch("http://localhost:8080/logout", { credentials: "include" });
    window.location.href = "/";
  };
  function capitalizar(texto) {
    if (!texto) return "";
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  }

  return (
    <nav className="relative">
      {/* NAV Desktop / Tablet */}
      <div className="hidden md:flex px-5 py-6 items-center justify-between bg-neutral-950">
        <div className="flex space-x-15 ml-10 py-5 text-lg font-sans">
          <button className="cursor-pointer px-4 text-white hover:text-yellow-400 transition-colors duration-300">
            <HashLink smooth to="/inicio/#">
              Inicio
            </HashLink>
          </button>

          <button className="cursor-pointer px-4 py-2 text-white hover:text-yellow-400 transition-colors duration-300">
            <HashLink smooth to="/inicio/#planes">
              Planes
            </HashLink>
          </button>

          <button className="cursor-pointer px-4 py-2 text-white hover:text-yellow-400 transition-colors duration-300">
            <HashLink smooth to="/inicio/#ubicacion">
              Ubicacion
            </HashLink>
          </button>

          <button className="cursor-pointer px-4 py-2 text-white hover:text-yellow-400 transition-colors duration-300">
            <HashLink smooth to="/inicio/#contacto">
              Contacto
            </HashLink>
          </button>
        </div>

        <div className="flex items-center mr-8">
          <button onClick={() => setMenuOpen(true)}>
            <img
              src={profile2}
              alt="Perfil"
              className="w-10 h-10 rounded-full cursor-pointer hover:scale-125 hover:shadow-lg hover:shadow-yellow-400/50 transition-transform duration-300 ease-in-out"
            />
          </button>
        </div>
      </div>

      {/* NAV Mobile Sticky Bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 rounded-t-3xl flex justify-around items-center py-5 px-4 md:hidden shadow-inner z-50">
        {/* Icono Home */}
        <button className="relative text-white active:scale-95 transition-transform duration-150">
          <HashLink smooth to="/inicio/#">
            <img src={home} alt="" className="w-6 h-6" />
          </HashLink>
          {/* Línea que aparece al presionar */}
          <span className="absolute top-0 left-0 w-full h-0.5  scale-x-0 transition-transform duration-150 origin-left active:scale-x-100"></span>
        </button>

        {/* Icono Pesa */}
        <button className="relative text-white active:scale-95 transition-transform duration-150">
          <HashLink smooth to="/inicio/#planes">
            <img src={pesa} alt="pesa-ico" className="w-6 h-6" />
          </HashLink>
          {/* Línea que aparece al presionar */}
          <span className="absolute top-0 left-0 w-full h-0.5  scale-x-0 transition-transform duration-150 origin-left active:scale-x-100"></span>
        </button>

        {/* Icono Ubicacion */}
        <button className="relative text-white active:scale-95 transition-transform duration-150">
          <HashLink smooth to="/inicio/#ubicacion">
            <img src={ubicacion} alt="ubicacion-ico" className="w-6 h-6" />
          </HashLink>
          {/* Línea que aparece al presionar */}
          <span className="absolute top-0 left-0 w-full h-0.5scale-x-0 transition-transform duration-150 origin-left active:scale-x-100"></span>
        </button>

        {/* Icono Contacto */}
        <button className="relative text-white active:scale-95 transition-transform duration-150">
          <HashLink smooth to="/inicio/#contacto">
            <img src={contacto} alt="contacto-ico" className="w-6 h-6" />
          </HashLink>
          {/* Línea que aparece al presionar */}
          <span className="absolute top-0 left-0 w-full h-0.5 scale-x-0 transition-transform duration-150 origin-left active:scale-x-100"></span>
        </button>

        {/* Icono Más */}
        <button
          className="text-white hover:text-yellow-400"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menú desplegable lateral */}
      <div
        className={`fixed right-0 top-0 w-75 h-full bg-gray-100 text-gray-800 shadow-xl z-50 transform transition-transform duration-600 p-6
    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-red-500 hover:text-black font-bold"
        >
          ✕
        </button>

        {/* ENCABEZADO DEL PERFIL */}
        <h2 className="text-lg font-bold mb-4">Mi Perfil</h2>
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={profile2}
            alt="Foto de perfil"
            className="w-14 h-14 rounded-full object-cover border border-gray-400 bg-red-500"
          />
          <div>
            <p className="font-semibold text-gray-900">
              {capitalizar(usuario?.nombre)} {capitalizar(usuario?.apellido)}
            </p>
            <p className="text-sm text-gray-600">{usuario?.email}</p>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="border-gray-400 mb-4" />

        <ul className="space-y-4">
          <li>
            <a
              href="/reservas"
              className="hover:text-red-600 transition-colors duration-200"
            >
              {usuario?.rol === "admin" ? "Ver Reservas" : "Reservar Clase"}
            </a>
          </li>
          <li>
            <HashLink
              smooth
              to="/inicio#entrenadores"
              className="hover:text-red-600"
            >
              Entrenadores
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/inicio#ubicacion"
              className="hover:text-red-600"
            >
              Ubicacion
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/inicio#faq" className="hover:text-red-600">
              Preguntas Frecuentes
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/inicio#sobre-nosotros"
              className="hover:text-red-600"
            >
              Sobre Nosotros
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/inicio#contacto"
              className="hover:text-red-600"
            >
              Contacto
            </HashLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800 transition-colors duration-200"
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
