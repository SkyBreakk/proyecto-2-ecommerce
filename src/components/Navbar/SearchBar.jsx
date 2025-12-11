export default function SearchBar() {
    return (
      <form
        className="d-flex mx-lg-auto my-2 my-lg-0"
        style={{ maxWidth: "350px", width: "100%" }}
      >
        <input
          className="form-control form-control-sm"
          type="search"
          placeholder="Buscar productos..."
        />
      </form>
    );
  }
  