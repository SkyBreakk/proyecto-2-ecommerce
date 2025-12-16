import { BrowserRouter } from "react-router-dom";
import RoutesPrincipal from "./routes/RoutesPrincipal";
import "./assets/css/root.css";
import HomeScreen from "./views/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <RoutesPrincipal />
    </BrowserRouter>
  );
}

export default App;
