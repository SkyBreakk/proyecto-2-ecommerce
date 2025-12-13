import React, { useState } from "react";
import "../../assets/css/NavBarApp.css";

function LoginModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login simulado! 😎");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Iniciar sesión</h2>
          <button className="modal-close" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit} className="modal-form">

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input 
                type="password" 
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-primary w-100">
              Iniciar sesión
            </button>
          </form>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
