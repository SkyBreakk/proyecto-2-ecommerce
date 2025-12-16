import React from "react";

const ProductCard = ({ producto }) => {
  const {
    title: titulo,
    price: precio,
    category: categoria,
    image: imagen,
    rating: { rate: estrellas },
  } = producto;

  return (
    <div className="col">
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
      </div>
    </div>
  );
};

export default ProductCard;
