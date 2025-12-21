import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import PagesLayout from "../layout/PagesLayout";
import SearchScreen from "../views/SearchScreen";
import RegisterScreen from "../views/RegisterScreen";
import AdminScreen from "../views/AdminScreen";
import { UserContext } from "../context/UserContext";
import AdminRoute from "./AdminRoute";
import AboutScreen from "../views/AboutScreen";
import ProductScreen from "../views/ProductScreen";
import Error404 from "../views/error404";
import ContactScreen from "../views/ContactScreen";

const RoutesPrincipal = () => {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="search/:query?" element={<SearchScreen />} />
        <Route path="product/:id" element={<ProductScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="contact" element={<ContactScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="*" element={<Error404 />} />
        <Route
          path="admin"
          element={
            <AdminRoute>
              <AdminScreen />
            </AdminRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default RoutesPrincipal;
