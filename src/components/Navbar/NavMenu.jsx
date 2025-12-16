import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function NavMenu({ onOpenCart, onOpenLogin }) {
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
        <button className="menu-btn" onClick={onOpenCart}>
          <i className="bi bi-cart"></i> Carrito
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
