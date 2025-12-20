import { useCart } from "../../context/CartContext";
import "../../assets/css/NavBarApp.css";

function CartModal({ open, onClose }) {
  const { cart, removeFromCart } = useCart();

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Carrito</h2>
          <button onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="modal-body">
          {cart.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="d-flex justify-content-between mb-2">
                <span>{item.title}</span>
                <span>${item.price}</span>
              </div>
            ))
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
