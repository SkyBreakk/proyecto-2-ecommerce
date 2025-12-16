import { useContext, useState } from "react";
import "../../assets/css/NavBarApp.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";


function LoginModal({ open, onClose }) {

  if (!open) return null;

  // Declaracion del Navigate
  const navigate = useNavigate();
  // Declaracion de los componentes del useForm para usarlos en los inputs
  const { register, handleSubmit, formState: { errors } } = useForm();
  // Desestructuración en los datos del contexto
  const { logIn, logOut } = useContext(UserContext);
  // Se cargan los usuarios desde el LocaleStorage
  // const [usuarios, setUsuarios] = useState(JSON.parse(localStorage.getItem("usuarios")) || []);
  const usuarios = (JSON.parse(localStorage.getItem("usuarios")) || []);
  // variable de estado usada para el mensaje de cuenta no encontrada
  const [mensaje, setMensaje] = useState(false);
  // variable de estado para el mensaje de contraseña incorrecta
  const [mensajePass, setMensajePass] = useState(false);

  // función que se ejecuta en el submit del form
  const iniciarSesion = (data) => {
    if (data.correo && data.password) {

      let posicion = usuarios.findIndex((usuario) => {
        return (usuario.correo === data.correo);
      });

      if (posicion != -1) {
        if ( usuarios[posicion].password === data.password ) {
          setMensaje(false);
          setMensajePass(false);
          logIn(usuarios[posicion].nombre, usuarios[posicion].correo, usuarios[posicion].password,usuarios[posicion].rol);
          navigate("/");
          onClose();
        } else {
          setMensajePass(true);
        }
      } else {
        setMensaje(true);
      }
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <h2>Iniciar sesión</h2>
          <button className="modal-close" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit(iniciarSesion)} noValidate className="modal-form">

            <div className="form-group">
              <label>Email</label>
              <input type="email"
                {...register("correo", {
                  required: "El correo es obligatorio"
                })} />
              {errors.correo && (<p className="text-danger">{errors.correo.message}</p>)}
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input type="password"
                {...register("password", {
                  required: "La contraseña es obligatoria"
                })} />
              {errors.password && (<p className="text-danger">{errors.password.message}</p>)}
            </div>
            {mensaje && <p className="text-danger text-center">La cuenta no existe</p>}
            {mensajePass && <p className="text-danger text-center">Contraseña incorrecta</p>}
            <button type="submit" className="btn-primary w-100">
              Iniciar sesión
            </button>

          </form>
        </div>


        <div className="modal-footer">
          <button className="btn-secondary" onClick={() => {
            navigate("/Register");
            onClose();
          }}>Crear Cuenta</button>
          <button className="btn-secondary" onClick={onClose}>Cerrar</button>
        </div>

      </div>
    </div>
  );
}

export default LoginModal;
