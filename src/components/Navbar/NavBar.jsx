import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import logo from "../../assets/logo.png";   // <=== IMPORTANTE

export default function NavBar({ abrirModal }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4 nav-custom">
      
      {/* LOGO EN IMAGEN */}
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img 
          src={logo}
          alt="Logo"
          className="logo-img"
        />
      </Link>

      {/* HAMBURGUESA */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* CONTENIDO */}
      <div className="collapse navbar-collapse" id="navbarMenu">
        <SearchBar />

        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item">
            <Link className="nav-link" to="/catalogo">
              Catálogo
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/carrito">
              <i className="bi bi-cart-fill"></i> Carrito
            </Link>
          </li>

          <li className="nav-item">
            <button className="nav-link btn-link-custom" onClick={abrirModal}>
              <i className="bi bi-person"></i> Iniciar sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
