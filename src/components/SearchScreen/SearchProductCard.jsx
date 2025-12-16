import React from "react";

const SearchProductCard = ({ producto }) => {
  const {
    title: titulo,
    price: precio,
    category: categoria,
    image: imagen,
    rating: { rate: estrellas },
  } = producto;

  return (
    <div className="col-6 col-md-4 col-xxl-3">
      <div className="tarjeta-producto mx-3 d-flex flex-column justify-content-around">
        {/* Imagen */}
        <div className="row">
          <img src={imagen} alt={titulo} />
        </div>
        {/* Nombre del producto */}
        <div className="row">
          <h4 className="text-center">{titulo}</h4>
        </div>
        {/* La categoría */}
        <div className="row justify-content-around">
          <p className="col text-center small">{categoria}</p>
        </div>
        {/* Rating y precio */}
        <div className="row row-cols-2">
          <p className="col-5 text-center">⭐{estrellas}</p>
          <p className="col-7 text-center">${precio}</p>
        </div>
        <div className="row">
          <div className="div d-flex justify-content-around mb-1">
            {/* Botón Añadir Carrito */}
            <button type="button" className="btn btn-success">
              <i className="bi bi-cart-plus"></i>
            </button>
            {/* Botón ver detalles del producto */}
            <button type="button" className="btn btn-outline-secondary">
              Ver Más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProductCard;
