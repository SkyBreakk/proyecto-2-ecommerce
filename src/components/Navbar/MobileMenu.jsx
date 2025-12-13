// src/components/navbar/MobileMenu.jsx

function MobileMenu({ onOpenCart, onOpenLogin }) {
    return (
      <div className="mobile-menu">
        <button
          type="button"
          className="menu-btn"
          onClick={onOpenCart}
        >
          <i className="bi bi-cart"></i>
          <span>Carrito</span>
        </button>
  
        <button
          type="button"
          className="menu-btn"
          onClick={onOpenLogin}
        >
          <i className="bi bi-person"></i>
          <span>Iniciar sesión</span>
        </button>
      </div>
    );
  }
  
  export default MobileMenu;
  