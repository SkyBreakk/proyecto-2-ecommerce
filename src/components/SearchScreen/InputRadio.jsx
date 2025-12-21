import React from "react";

const InputRadio = ({ categoria, setFiltroCategoria }) => {
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        name="categoria"
        id={categoria}
        autoComplete="off"
        value="Todos"
        onChange={(e) => setFiltroCategoria(categoria)}
      />
      <label className="btn radio" htmlFor={categoria}>
        {categoria}
      </label>
    </>
  );
};

export default InputRadio;
