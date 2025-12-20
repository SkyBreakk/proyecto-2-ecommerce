import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Toast from "../ui/Toast"; // ajustá ruta si cambia

const SearchProductCard = ({ producto }) => {
  const { addToCart } = useCart();

  const [showToast, setShowToast] = useState(false);

  const handleAdd = () => {
    addToCart(producto);

    // mostrar toast 1.2s
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1200);
  };

  const {
    id,
    title: titulo,
    price: precio,
    category: categoria,
    image: imagen,
    rating: { rate: estrellas },
  } = producto;

  return (
    <>
      <div className="col-8 col-sm-6 col-md-4 col-xxl-3 d-flex flex-column">
        <div className="tarjeta-producto mx-3 d-flex flex-column align-self-center justify-content-around">
          <div className="row">
            <img src={imagen} alt={titulo} />
          </div>

          <div className="row">
            <h4 className="text-center">{titulo}</h4>
          </div>

          <div className="row justify-content-around">
            <p className="col text-center small">{categoria}</p>
          </div>

          <div className="row row-cols-2">
            <p className="col-5 text-center">⭐{estrellas}</p>
            <p className="col-7 text-center">${precio}</p>
          </div>

          <div className="row">
            <div className="d-flex justify-content-around mb-1">
              <button
                type="button"
                className="btn btn-success"
                onClick={handleAdd}
              >
                <i className="bi bi-cart-plus"></i>
              </button>

              <Link
                type="button"
                className="btn btn-outline-secondary"
                to={`/product/${id}`}
              >
                Ver Más
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <Toast show={showToast} message="✅ Agregado al carrito" />
    </>
  );
};

export default SearchProductCard;
