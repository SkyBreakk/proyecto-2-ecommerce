export default function LoginModal({ cerrarModal }) {
    return (
      <div className="modal-overlay" onClick={cerrarModal}>
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="modal-title">Iniciar sesión</h3>
  
          <input
            type="email"
            className="modal-input"
            placeholder="Correo electrónico"
          />
  
          <input
            type="password"
            className="modal-input"
            placeholder="Contraseña"
          />
  
          <button className="modal-btn-primary">Ingresar</button>
  
          <button className="modal-btn-secondary" onClick={cerrarModal}>
            Cancelar
          </button>
        </div>
      </div>
    );
  }
  