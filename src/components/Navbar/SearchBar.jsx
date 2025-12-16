import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="search-container d-flex">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Buscar productos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className="btn search-btn">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
