import { useState } from "react";


// 🧩 Estilos (primero los globales)
import "../../css/root.css";        // variables globales
import "../../css/NavBarApp.css";   // estilos del navbar + modal

// 🧩 Componentes
import NavBar from "./NavBar.jsx";
import LoginModal from "./LoginModal.jsx";

export default function NavBarApp() {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  return (
    <>
      {/* Navbar */}
      <NavBar abrirModal={abrirModal} />

      {/* Modal */}
      {mostrarModal && <LoginModal cerrarModal={cerrarModal} />}
    </>
  );
}
