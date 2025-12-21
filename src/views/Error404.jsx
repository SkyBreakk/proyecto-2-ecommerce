import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Error404.css";

// ✅ Import de imagen local (la que me pasaste)
import monsterImg from "../assets/img/monster.jpg";

function Error404() {
  return (
    <main className="error404 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Texto */}
          <div className="col-12 col-lg-6">
            

            <h1 className="display-4 fw-bold mb-2">
              Ups… esta puerta no lleva a ningún lado
            </h1>

            <p className="lead text-secondary mb-4">
              La página que buscás no existe o fue movida.
              Volvé al inicio o usá el buscador para encontrar lo que necesitás.
            </p>

            <div className="d-flex gap-2 flex-wrap">
              {/* ✅ Botón volver al inicio */}
              <Link to="/" className="btn btn-primary btn-lg">
                <i className="bi bi-house-door me-2"></i>
                Ir al inicio
              </Link>

              {/* ✅ Botón volver atrás */}
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg"
                onClick={() => window.history.back()}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Volver atrás
              </button>
            </div>

            <small className="d-block text-muted mt-4">
              Tip: revisá si la URL está bien escrita.
            </small>
          </div>

          {/* Imagen */}
          <div className="col-12 col-lg-6">
            <div className="error404-card shadow-sm">
              <img
                src={monsterImg}
                alt="Monstruos en una escena divertida"
                className="error404-img"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Error404;
