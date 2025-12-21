import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../assets/css/contactoscreen.css";
import Toast from "../components/ui/Toast";

const ContactScreen = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showToast, setShowToast] = useState(false);

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1200);
    reset();
  };

  return (
    <>
      <div className="contacto-box">
        <div className="container">
          <div className="row justify-content-center g-4">
            {/* MAP SECTION */}
            <section className="col-md-5 d-none d-md-block">
              <div className="tarjeta map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8467.430357313217!2d-65.21001941421315!3d-26.83626519289161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1766286490977!5m2!1ses-419!2sar"
                  title="map"
                  loading="lazy"
                ></iframe>
              </div>
            </section>

            <section className="col-12 col-md-6">
              <div className="tarjeta">
                <h1 className="h4 contacto-titulo">FORMULARIO DE CONTACTO</h1>

                <form onSubmit={handleSubmit(onSubmit)} name="contacto">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label label-input">
                      Nombre:
                    </label>
                    <input
                      type="text"
                      className={`form-control input-contacto ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      id="name"
                      autoComplete="name"
                      {...register("name", {
                        required: "El nombre es obligatorio.",
                      })}
                    />
                    {errors.name && (
                      <span className="text-danger small">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label label-input">
                      Correo Electrónico:
                    </label>
                    <input
                      type="email"
                      className={`form-control input-contacto ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      autoComplete="email"
                      {...register("email", {
                        required: "El correo electrónico es obligatorio.",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message:
                            "Por favor, ingresa un correo electrónico válido.",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-danger small">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Mensaje Field */}
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label label-input">
                      Mensaje:
                    </label>
                    <textarea
                      className={`form-control input-contacto ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      id="message"
                      autoComplete="off"
                      rows="5"
                      {...register("message", {
                        required: "El mensaje es obligatorio.",
                      })}
                    ></textarea>
                    {errors.message && (
                      <span className="text-danger small">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <button type="submit" className="btn boton mt-2">
                    Enviar
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Toast show={showToast} message="✅ Mensaje enviado correctamente" />
    </>
  );
};

export default ContactScreen;
