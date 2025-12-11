import { BrowserRouter } from "react-router-dom";
import RoutesPrincipal from "./routes/RoutesPrincipal";
import NavBarApp from "./components/Navbar/NavBarApp";  // importa el navbar

function App() {
  return (
    <BrowserRouter>
      {/* ⭐ Navbar siempre visible */}
      <NavBarApp />

      {/* ⭐ Acá van todas las rutas */}
      <RoutesPrincipal />
    </BrowserRouter>
  );
}

export default App;
