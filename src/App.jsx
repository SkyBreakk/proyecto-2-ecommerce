import { BrowserRouter } from "react-router-dom";
import RoutesPrincipal from "./routes/RoutesPrincipal";
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
