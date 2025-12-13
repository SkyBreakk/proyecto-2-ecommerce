function CartModal({ onClose }) {
    return (
      <div className="modal-overlay">
        <div className="modal-box">
          <h2>Carrito</h2>
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  }
  
  export default CartModal;
  