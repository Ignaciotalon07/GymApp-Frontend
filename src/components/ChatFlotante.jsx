import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";

export default function ChatFlotante() {
  const location = useLocation();
  const [abierto, setAbierto] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const mensajesEndRef = useRef(null);

  useEffect(() => {
    if (mensajesEndRef.current) {
      mensajesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mensajes]);

  if (location.pathname === "/" || location.pathname === "/register") {
    return null;
  }

  const enviarMensaje = async (e) => {
    e.preventDefault();
    if (!mensaje.trim()) return;

    setMensajes((prev) => [...prev, { emisor: "usuario", texto: mensaje }]);

    try {
      const res = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: mensaje }),
      });

      const data = await res.json();

      setMensajes((prev) => [...prev, { emisor: "ia", texto: data.respuesta }]);
      setMensaje("");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="fixed bottom-18 right-4 z-50">
      {!abierto ? (
        <button
          onClick={() => {
            setAbierto(true);
            if (mensajes.length === 0) {
              setMensajes([
                {
                  emisor: "ia",
                  texto:
                    "¡Hola! Soy tu asistente fitness. ¿Querés que te recomiende una rutina o un plan de alimentación?",
                },
              ]);
            }
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-full shadow-xl"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="w-80 bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col h-[500px]">
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-bold">Asistente Fitness</h3>
            <button onClick={() => setAbierto(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto flex flex-col scrollbar-thin scrollbar-thumb-gray-400">
            {mensajes.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm ${
                  m.emisor === "usuario"
                    ? "bg-gray-200 self-end text-right"
                    : "bg-blue-100 self-start text-left"
                }`}
              >
                {m.texto}
              </div>
            ))}
            <div ref={mensajesEndRef} />
          </div>

          <form
            onSubmit={enviarMensaje}
            className="border-t px-3 py-2 bg-gray-100 flex items-center gap-2"
          >
            <input
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="flex-1 px-3 py-1 rounded-md border border-gray-300 text-sm"
              placeholder="Escribí tu consulta..."
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
