import React, { useState } from "react";
import listaProductos from "../data/products.json";
import "../assets/css/homepage.css";
import ListProductCards from "../components/HomeScreen/ListProductCards";
import CarouselHome from "../components/HomeScreen/CarouselHome";

const HomeScreen = () => {
  function conseguirProductos() {
    const productosGuardados = localStorage.getItem("productos");
    return productosGuardados ? JSON.parse(productosGuardados) : listaProductos;
  }
  const productos = conseguirProductos();

  return (
    <div className="home-view py-3">
      <div className="container">
        {/* Carousel */}
        <div className="row row-cols-1">
          <CarouselHome lista={productos} />
        </div>
        {/* Lista rating */}
        <div className="row flex-column">
          <ListProductCards lista={productos} orden={"rating"} />
        </div>
        {/* Lista precio */}
        <div className="row flex-column">
          <ListProductCards lista={productos} orden={"precio"} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
