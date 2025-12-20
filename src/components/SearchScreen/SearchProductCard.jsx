import { useCart } from "../../context/CartContext";

const SearchProductCard = ({ producto }) => {
  const { addToCart } = useCart();

  const {
    title: titulo,
    price: precio,
    category: categoria,
    image: imagen,
    rating: { rate: estrellas },
  } = producto;

  return (
    <div className="col-8 col-sm-6 col-md-4 col-xxl-3 d-flex flex-column">
      <div className="tarjeta-producto mx-3 d-flex flex-column justify-content-around">

        <img src={imagen} alt={titulo} />

        <h4 className="text-center">{titulo}</h4>
        <p className="text-center small">{categoria}</p>

        <div className="row">
          <p className="col text-center">⭐ {estrellas}</p>
          <p className="col text-center">${precio}</p>
        </div>

        <div className="d-flex justify-content-around mb-2">
          {/* 🛒 AGREGAR AL CARRITO */}
          <button
            className="btn btn-success"
            onClick={() => addToCart(producto)}
          >
            <i className="bi bi-cart-plus"></i>
          </button>

          <button className="btn btn-outline-secondary">
            Ver Más
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchProductCard;
