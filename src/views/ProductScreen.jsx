import { Link, useParams } from "react-router-dom";
import listaProductos from "../data/productos.json";
import "../assets/css/productscreen.css";
const ProductScreen = () => {
  function conseguirProductos() {
    const productosGuardados = localStorage.getItem("productos");
    return productosGuardados ? JSON.parse(productosGuardados) : listaProductos;
  }
  const productos = conseguirProductos();
  const { id } = useParams();
  const {
    title: titulo,
    price: precio,
    description: descripcion,
    category: categoria,
    image: imagen,
    rating: { rate: estrellas, count: stock },
  } = productos.find((prod) => prod.id.toString() === id.toString());

  function cantidadEstrellas() {
    const cantidad = Math.round(estrellas);

    return "⭐".repeat(cantidad);
  }

  return (
    <div className="product-box d-flex align-items-center">
      <div className="container my-3">
        <div className="row justify-content-center product">
          <div
            className="col-12 col-lg-6 d-flex align-items-center justify-content-center py-3"
            id="producto-imagen"
          >
            <img src={imagen} alt={titulo} />
          </div>
          <div className="col-12 col-lg-6 py-3" id="producto-detalle">
            <div className="row row-cols-1 flex-column justify-content-center">
              <div className="col d-flex flex-column mb-3">
                <h2 className="text-center">{titulo}</h2>
                <small className="fs-5 align-self-center">{categoria}</small>
                <p className="text-center">{cantidadEstrellas()}</p>
              </div>
              <div className="col"></div>
              <div className="col desc">
                <span className="fw-semibold fs-5">
                  Descripción del Producto:
                </span>
                <p className="ms-2">{descripcion}</p>
              </div>
              <div className="col mb-3 cantidad">
                <p className="fs-5">Stock: {stock}</p>
                <p className="fs-2 fw-bold">
                  <small>ARS</small>${precio}
                </p>
              </div>
              <div className="div d-flex justify-content-between mb-1">
                {/* Botón Añadir Carrito */}
                <button type="button" className="btn btn-success">
                  <i className="bi bi-cart-plus"></i> Añadir al Carrito
                </button>
                {/* Botón ver detalles del producto */}
                <Link
                  type="button"
                  className="btn btn-outline-secondary"
                  to={`/search/`}
                >
                  Volver a la búsqueda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
