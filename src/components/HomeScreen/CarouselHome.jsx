import React from "react";
import logo from "../../assets/img/logo-horizontal.svg";
const CarouselHome = ({ lista }) => {
  //Conseguir un producto aleatorio
  const producto1 = lista[Math.floor(Math.random() * 40)];
  const producto2 = lista[Math.floor(Math.random() * 40)];

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner d-flex align-items-center">
        {/* Logo y slogan */}
        <div className="carousel-item active">
          <div className="container d-flex flex-column h-100 justify-content-center">
            <div className="row logo-box">
              <div className="logo"></div>
            </div>
            <div className="row">
              <h1 className="text-center">
                Todo lo que necesitas en un solo lugar
              </h1>
            </div>
          </div>
        </div>
        {/* Producto 1 */}
        <div className="carousel-item">
          <div className="container d-flex flex-column h-100 justify-content-center">
            <div className="row row-gap-3 justify-content-center">
              <div className="col-12 col-md-6 d-flex flex-column align-items-center producto1">
                <div
                  className="imagen"
                  style={{ backgroundImage: `url(${producto1.image})` }}
                ></div>
                <h3 className="text-center">{producto1.title}</h3>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                <h2 className="text-center">
                  Donde encuentras la Mayor Calidad
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* Producto 2 */}
        <div className="carousel-item">
          <div className="container d-flex flex-column h-100 justify-content-center">
            <div className="row row-gap-3 justify-content-center">
              <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                <h2 className="text-center">
                  Donde encuentras el Menor Precio
                </h2>
              </div>
              <div className="col-12 col-md-6 d-flex flex-column align-items-center producto2">
                <div
                  className="imagen"
                  style={{ backgroundImage: `url(${producto2.image})` }}
                ></div>
                <h3 className="text-center">{producto2.title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselHome;
