import React from "react";
import { useCart } from "../../context/CartContext";
import "../../assets/css/NavBarApp.css";

function CartModal({ open, onClose }) {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container modal-cart-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Carrito ({totalItems})</h2>
          <button className="modal-close" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="modal-body modal-cart-body">
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img className="cart-item-img" src={item.image} alt={item.title} />

                <div className="cart-item-info">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-meta">
                    <span>${item.price.toFixed(2)}</span>
                    <span className="muted">•</span>
                    <span>Subtotal: ${(item.price * item.qty).toFixed(2)}</span>
                  </div>

                  <div className="cart-item-actions">
                    <button className="btn btn-outline-secondary" onClick={() => decreaseQty(item.id)}>
                      -
                    </button>

                    <span className="cart-qty">{item.qty}</span>

                    <button className="btn btn-outline-secondary" onClick={() => increaseQty(item.id)}>
                      +
                    </button>

                    <button className="btn btn-danger ms-2" onClick={() => removeFromCart(item.id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="modal-footer modal-cart-footer">
          <div>
            <div className="fw-bold">Total: ${totalPrice.toFixed(2)}</div>
            <div className="text-muted small">Items: {totalItems}</div>
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-outline-danger" onClick={clearCart} disabled={cart.length === 0}>
              Vaciar
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
