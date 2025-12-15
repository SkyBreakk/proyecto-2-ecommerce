import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function MobileMenu({ onOpenCart, onOpenLogin }) {

  const navigate = useNavigate();

  const { user, logOut } = useContext(UserContext);

  const onCloseLogin = () => {
    logOut();
    navigate("/");
  }

  return (
    <div className="mobile-menu">

      <Link to="/" className="menu-btn">
        <i className="bi bi-house"></i> Inicio
      </Link>

      <button className="menu-btn" onClick={onOpenCart}>
        <i className="bi bi-cart"></i> Carrito
      </button>

      {
        user.isLogin ? (
          <button className="menu-btn" onClick={ () => onCloseLogin() }>
            <i className="bi bi-person"></i> Cerrar sesión
          </button>
        ) : (
          <button className="menu-btn" onClick={onOpenLogin}>
            <i className="bi bi-person"></i> Iniciar sesión
          </button>
        )
      }

    </div>
  );
}

export default MobileMenu;
