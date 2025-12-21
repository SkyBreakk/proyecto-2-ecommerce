import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../assets/css/RegisterScreen.css";
import Toast from "../components/ui/Toast";

function RegisterScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [vectorUsuarios, setVectorUsuarios] = useState(
    JSON.parse(localStorage.getItem("usuarios")) || [
      {
        nombre: "admin",
        correo: "admin@admin.com",
        password: "admin1234",
        rol: "admin",
      },
    ]
  );

  const [mensaje, setMensaje] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(vectorUsuarios));
  }, [vectorUsuarios]);

  const cargarUsuario = (data) => {
    let busqueda = vectorUsuarios.find((auxUsuario) => {
      return auxUsuario.correo === data.email;
    });

    if (busqueda) {
      setMensaje(true);
    } else {
      let aux = {
        nombre: data.nombre,
        correo: data.email,
        password: data.password,
        rol: "invitado",
      };
      setVectorUsuarios([...vectorUsuarios, aux]);
      setMensaje(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1200);
      setTimeout(() => navigate("/"), 1800);
    }
  };

  return (
    <>
      <section className="container-fluid register-box">
        <div className="row vh-100 align-items-center">
          <div className="col-12 col-md-6 offset-md-3 p-3 registro-contenedor rounded shadow">
            <div className="text-center registro-titulo mb-3">
              <p className="h1">Registro de Cuenta</p>
              {mensaje && (
                <p className="text-center text-danger">
                  El correo ya pertenece a una cuenta existente
                </p>
              )}
            </div>
            <form
              onSubmit={handleSubmit(cargarUsuario)}
              noValidate
              name="register-form"
            >
              <div className="mt-3">
                <label className="form-label registro-label" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="nombre"
                  autoComplete="name"
                  {...register("nombre", {
                    required: "Este campo es obligatorio",
                  })}
                />

                {errors.nombre && (
                  <p className="text-danger">{errors.nombre.message}</p>
                )}
              </div>

              <div className="mt-3">
                <label className="form-label registro-label" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  autoComplete="email"
                  {...register("email", {
                    required: "Este campo es obligatorio",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "El e-mail ingresado no es valido",
                    },
                  })}
                />

                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>

              <div className="mt-3">
                <label className="form-label registro-label" htmlFor="password">
                  Contraseña
                </label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  autoComplete="off"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    pattern: {
                      value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/,
                      message:
                        "La contraseña no es valida. Debe tener mínimo una mayúscula y un dígito",
                    },
                  })}
                />

                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </div>

              <div className="d-grid mt-3">
                <button className="btn registro-boton" type="submit">
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Toast show={showToast} message="✅ Se registró con exito!" />
    </>
  );
}

export default RegisterScreen;
