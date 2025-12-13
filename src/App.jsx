import { BrowserRouter } from "react-router-dom";
import RoutesPrincipal from "./routes/RoutesPrincipal";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <BrowserRouter>
      {/* ⭐ Navbar siempre visible */}
     <NavBar />

      {/* ⭐ Acá van todas las rutas */}
      <RoutesPrincipal />
    </BrowserRouter>
  );
}

export default App;
