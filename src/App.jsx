import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Reservas from "./components/Reservas";
import Nav from "./components/Nav";
import NuevaReserva from "./components/NuevaReserva";
import ChatFlotante from "./components/ChatFlotante.jsx";
import Inicio from "./components/Inicio.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/inicio"
          element={
            <>
              <Nav />
              <Inicio />
              <Footer />
            </>
          }
        />
        <Route
          path="/reservas"
          element={
            <>
              <Reservas /> <Footer />{" "}
            </>
          }
        />
        <Route
          path="/reservas/nuevareserva"
          element={
            <>
              <NuevaReserva /> <Footer />
            </>
          }
        />
      </Routes>
      <ChatFlotante />
    </Router>
  );
}

export default App;
