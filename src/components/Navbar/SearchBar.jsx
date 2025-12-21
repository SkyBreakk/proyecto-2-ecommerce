import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const manejarBusqueda = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };

  return (
    <form
      className="search-container d-flex"
      onSubmit={manejarBusqueda}
      id="search"
    >
      <input
        type="text"
        className="form-control search-input"
        placeholder="Buscar productos..."
        id="search-bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className="btn search-btn">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;
