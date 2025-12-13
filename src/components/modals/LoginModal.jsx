function LoginModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Iniciar Sesión</h2>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default LoginModal;
