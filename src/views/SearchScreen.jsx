import React, { useState } from "react";
import listaProductos from "../data/productos.json";
import "../assets/css/searchscreen.css";
import InputRadio from "../components/SearchScreen/InputRadio";
import SearchProductCard from "../components/SearchScreen/SearchProductCard";

const SearchScreen = () => {
  function conseguirProductos() {
    const productosGuardados = localStorage.getItem("productos");
    return productosGuardados ? JSON.parse(productosGuardados) : listaProductos;
  }
  const productos = conseguirProductos();
  const categorias = [
    "Todos",
    "Ropa de Hombre",
    "Ropa de Mujer",
    "Joyería",
    "Electrónica",
  ];

  //Configuración Búsqueda
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");
  const [precioMin, setPrecioMin] = useState("");
  const [precioMax, setPrecioMax] = useState("");
  const [filtroRating, setFiltroRating] = useState("");

  //Normalizar Término de Búsqueda
  const normalizarTexto = (texto) => {
    if (!texto) {
      return "";
    }
    return texto
      .normalize("NFD") // Descompone letras con acentos
      .replace(/[\u0300-\u036f]/g, "") // Remueve dichas letras
      .toLowerCase()
      .replace(/\s/g, ""); // Elimina los espacios
  };

  //Filtrar resultados
  const resultadosFiltrados = productos.filter((producto) => {
    //Filtrar por el contenido del titulo y descripción
    const nombreNormalizado = normalizarTexto(producto.title);
    const descripcionNormalizado = normalizarTexto(producto.description);
    const terminoBusquedaNormalizado = normalizarTexto(terminoBusqueda);

    const resultadosBusqueda =
      nombreNormalizado.includes(terminoBusquedaNormalizado) ||
      descripcionNormalizado.includes(terminoBusquedaNormalizado);

    //Filtrar por categoríaa
    const resultadosCategoria =
      filtroCategoria === "Todos" || producto.category === filtroCategoria;

    //Filtrar por precio
    const minimo = precioMin === "" ? 0 : +precioMin;
    const maximo = precioMax === "" ? Infinity : +precioMax;

    const resultadosPrecio =
      producto.price >= minimo && producto.price <= maximo;

    //Filtrar por estrellas
    const resultadosRating = producto.rating.rate >= filtroRating;

    return (
      resultadosBusqueda &&
      resultadosCategoria &&
      resultadosPrecio &&
      resultadosRating
    );
  });

  return (
    <div className="search-screen py-4">
      <div className="container search-box row-gap-3">
        <div className="row">
          <h2>Buscar tu producto deseado:</h2>
        </div>
        <div className="row">
          {/* Columna filtro */}
          <div className="col-12 col-lg-3" id="filtro">
            {/* Buscar por palabras */}
            <div className="row pb-3">
              <span className="fw-semibold my-2">Busqueda:</span>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej: Camiseta de..."
                  value={terminoBusqueda}
                  onChange={(e) => setTerminoBusqueda(e.target.value)}
                />
              </div>
            </div>
            {/* Buscar por categoría */}
            <div className="row pb-3">
              <span className="fw-semibold my-2">Categoría:</span>
              <div className="d-flex flex-wrap gap-2">
                {categorias.map((categoria) => (
                  <InputRadio
                    categoria={categoria}
                    setFiltroCategoria={setFiltroCategoria}
                    key={categoria}
                  />
                ))}
              </div>
            </div>
            {/* Buscar por precio */}
            <div className="row pb-3">
              <span className="fw-semibold my-2">Rango del Precio:</span>
              <div className="input-group precio">
                <span className="input-group-text">$</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Mínimo"
                  min={0}
                  value={precioMin}
                  onChange={(e) => setPrecioMin(e.target.value)}
                />
                <span className="input-group-text">$</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Máximo"
                  min={!precioMin ? 0 : precioMin}
                  value={precioMax}
                  onChange={(e) => setPrecioMax(e.target.value)}
                />
              </div>
            </div>
            <div className="row pb-3">
              <span className="fw-semibold my-2">Rating Mínimo:</span>
              <div className="input-group">
                <span className="input-group-text">⭐</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Mínimo"
                  min={0}
                  max={5}
                  value={filtroRating}
                  onChange={(e) => setFiltroRating(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9" id="productos">
            <div className="container">
              {resultadosFiltrados.length === 0 ? (
                <div className="row pt-3">
                  <p className="text-center fs-4">
                    No se encontraron resultados que concuerden...
                  </p>
                </div>
              ) : (
                <div className="row row-gap-3 py-3">
                  {resultadosFiltrados.map((producto) => (
                    <SearchProductCard producto={producto} key={producto.id} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
