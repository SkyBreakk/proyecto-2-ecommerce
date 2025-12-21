import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useCart } from "../../context/CartContext";

function MobileMenu({ onOpenCart, onOpenLogin }) {
  const { totalItems } = useCart();

  const navigate = useNavigate();

  const { user, logOut } = useContext(UserContext);

  const onCloseLogin = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="mobile-menu">
      <Link to="/" className="menu-btn">
        <i className="bi bi-house"></i> Inicio
      </Link>

      {user.rol === "admin" && (
        <Link to="admin" className="menu-btn">
          <i className="bi bi-person-badge"></i> Admin
        </Link>
      )}

      <button className="menu-btn position-relative" onClick={onOpenCart}>
        <i className="bi bi-cart"></i> Carrito
        {totalItems > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
          </span>
        )}
      </button>

      {user.isLogin ? (
        <button className="menu-btn" onClick={() => onCloseLogin()}>
          <i className="bi bi-person"></i> Cerrar sesión
        </button>
      ) : (
        <button className="menu-btn" onClick={onOpenLogin}>
          <i className="bi bi-person"></i> Iniciar sesión
        </button>
      )}
    </div>
  );
}

export default MobileMenu;
