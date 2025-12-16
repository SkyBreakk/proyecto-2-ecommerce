import React from "react";
import ProductCard from "./ProductCard";

const ListProductCards = ({ lista, orden }) => {
  //Ordenar la lista de productos por un criterio
  const listaOrdenada = lista
    .toSorted((a, b) => {
      let valorA, valorB;
      //Ordenar por el rating o precio
      if (orden === "rating") {
        valorA = a.rating.rate;
        valorB = b.rating.rate;
        //Ordenar de mayor a menor
        return valorB - valorA;
      } else if (orden === "precio") {
        valorA = a.price;
        valorB = b.price;
        //Ordenar de menor a mayor
        return valorA - valorB;
      }
    })
    .slice(0, 6);

  return (
    <div className="col my-3 d-flex flex-column align-items-center lista justify-content-center">
      {/* Mostrar texto diferente dependiendo del ordenado */}
      <h3 className="row text-center">
        {orden === "rating" ? "Los Mejores Valorados" : "Los Mejores Precios"}
      </h3>
      {/* Scroll y generador de tarjetas */}
      <div className="scroll-tarjetas row flex-nowrap flex-row">
        {listaOrdenada.map((producto, index) => (
          <ProductCard producto={producto} index={index} key={producto.id} />
        ))}
      </div>
    </div>
  );
};

export default ListProductCards;
