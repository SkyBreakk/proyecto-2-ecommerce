import { BrowserRouter } from "react-router-dom";
import RoutesPrincipal from "./routes/RoutesPrincipal";
import NavBar from "./components/navbar/NavBar";
import HomeScreen from "./views/HomeScreen";

function App() {
  return (
    <BrowserRouter>
     <HomeScreen />
      <RoutesPrincipal />
    </BrowserRouter>
  );
}

export default App;
