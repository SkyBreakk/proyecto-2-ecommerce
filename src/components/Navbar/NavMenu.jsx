import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useCart } from "../../context/CartContext";


function NavMenu({ onOpenCart, onOpenLogin }) {

  const { totalItems } = useCart();

  const navigate = useNavigate();

  const { user, logOut } = useContext(UserContext);

  const onCloseLogin = () => {
    logOut();
    navigate("/");
  };

  return (
    <ul className="nav-menu">
      {/* INICIO */}
      <li>
        <Link to="/" className="menu-link">
          Inicio
        </Link>
      </li>

      {/* Enlace a admin si el usuario logueado es administrador*/}

      {user.isLogin && user.rol === "admin" && (
        <li>
          <NavLink className="menu-link" to="admin">
            Admin
          </NavLink>
        </li>
      )}

      {/* CARRITO */}
<li>
  <button
    className="menu-btn position-relative"
    onClick={onOpenCart}
  >
    <i className="bi bi-cart"></i> Carrito

    {/* Badge cantidad */}
    {totalItems > 0 && (
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {totalItems}
      </span>
    )}
  </button>
</li>

      {/* LOGIN */}

      <li>
        {user.isLogin ? (
          <button className="menu-btn" onClick={() => onCloseLogin()}>
            <i className="bi bi-person"></i> Cerrar sesión
          </button>
        ) : (
          <button className="menu-btn" onClick={onOpenLogin}>
            <i className="bi bi-person"></i> Iniciar sesión
          </button>
        )}
      </li>
    </ul>
  );
}

export default NavMenu;
