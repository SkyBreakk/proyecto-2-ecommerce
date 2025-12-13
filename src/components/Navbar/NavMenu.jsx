import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function NavMenu({ onOpenCart, onOpenLogin }) {
  return (
    <ul className="nav-menu">

      {/* INICIO */}
      <li>
        <Link to="/" className="menu-link">
          Inicio
        </Link>
      </li>

      {/* CARRITO */}
      <li>
        <button className="menu-btn" onClick={onOpenCart}>
          <i className="bi bi-cart"></i> Carrito
        </button>
      </li>

      {/* LOGIN */}
      <li>
        <button className="menu-btn" onClick={onOpenLogin}>
          <i className="bi bi-person"></i> Iniciar sesión
        </button>
      </li>

    </ul>
  );
}

export default NavMenu;
