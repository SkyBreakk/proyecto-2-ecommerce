import { Link } from "react-router-dom";

function MobileMenu({ onOpenCart, onOpenLogin }) {
  return (
    <div className="mobile-menu">
      
      <Link to="/" className="menu-btn">
        <i className="bi bi-house"></i> Inicio
      </Link>

      <button className="menu-btn" onClick={onOpenCart}>
        <i className="bi bi-cart"></i> Carrito
      </button>

      <button className="menu-btn" onClick={onOpenLogin}>
        <i className="bi bi-person"></i> Iniciar sesión
      </button>
    </div>
  );
}

export default MobileMenu;
