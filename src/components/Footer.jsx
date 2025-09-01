import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        {/* Logo / Nombre */}
        <div>
          <h2 className="text-3xl font-extrabold text-amber-400">
            <HashLink smooth to="/inicio/#" className="hover:text-yellow-400">
              GymMaster
            </HashLink>
          </h2>
          <p className="text-gray-400 mt-2">
            Elevando tu entrenamiento al siguiente nivel. Unite a nuestra
            comunidad.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-300">
            Enlaces rápidos
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <HashLink smooth to="/inicio/#" className="hover:text-yellow-400">
                Inicio
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/reservas/#"
                className="hover:text-yellow-400"
              >
                Reservas
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/inicio/#contacto"
                className="hover:text-yellow-400"
              >
                Contacto
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-300">
            Nuestras redes
          </h3>
          <div className="flex justify-center md:justify-start space-x-5">
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm8 1a1 1 0 100 2 1 1 0 000-2zm-5 1a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 17 22 12z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-400 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.162 5.656c-.793.352-1.644.59-2.538.697a4.486 4.486 0 001.965-2.476 9.02 9.02 0 01-2.828 1.082 4.513 4.513 0 00-7.688 4.113 12.806 12.806 0 01-9.297-4.711 4.506 4.506 0 001.395 6.021 4.49 4.49 0 01-2.045-.567v.057a4.516 4.516 0 003.618 4.424 4.51 4.51 0 01-2.038.077 4.517 4.517 0 004.214 3.135 9.046 9.046 0 01-5.594 1.926c-.362 0-.72-.021-1.074-.063a12.772 12.772 0 006.918 2.03c8.303 0 12.84-6.875 12.84-12.841 0-.196-.004-.392-.013-.587a9.164 9.164 0 002.248-2.333z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/543512049674" //
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.486 2 2 6.19 2 11.352c0 1.95.586 3.77 1.635 5.36L2 22l5.504-1.44A9.94 9.94 0 0012 20.705c5.514 0 10-4.19 10-9.353C22 6.19 17.514 2 12 2zm0 16.93a8.14 8.14 0 01-4.146-1.137l-.297-.176-3.267.855.872-3.094-.194-.317A7.08 7.08 0 014 11.352C4 7.25 7.582 4 12 4s8 3.25 8 7.352-3.582 7.578-8 7.578zm4.367-5.442c-.237-.118-1.406-.695-1.624-.774-.218-.079-.377-.118-.535.118-.158.237-.615.774-.754.932-.138.158-.277.178-.514.059-.237-.118-.999-.368-1.902-1.174-.703-.627-1.178-1.401-1.317-1.637-.138-.237-.015-.365.104-.483.106-.105.237-.277.356-.415.119-.139.158-.237.237-.396.079-.158.04-.297-.02-.415-.059-.118-.535-1.287-.733-1.763-.193-.465-.39-.402-.535-.41-.138-.007-.297-.009-.456-.009-.158 0-.415.059-.633.297-.218.237-.832.813-.832 1.983s.852 2.302.97 2.46c.119.158 1.676 2.618 4.06 3.672.568.245 1.01.391 1.354.5.569.181 1.087.156 1.497.095.456-.068 1.406-.574 1.604-1.127.198-.554.198-1.028.139-1.127-.06-.099-.218-.158-.456-.277z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Línea separadora y copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} OnFit. Todos los derechos reservados.
      </div>
    </footer>
  );
}
