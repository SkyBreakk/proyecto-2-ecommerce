import { BrowserRouter } from "react-router-dom";
// import RoutesPrincipal from "./routes/RoutesPrincipal";
import "./assets/css/root.css";
import AboutScreen from "./views/AboutScreen";

function App() {
  return (
    <BrowserRouter>
      {/* <RoutesPrincipal /> */}
      <AboutScreen />
    </BrowserRouter>
  );
}

export default App;
