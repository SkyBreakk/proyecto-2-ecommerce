import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import ProtectedRoutes from "./ProtectedRoutes";
import PagesLayout from "../layout/PagesLayout";
import SearchScreen from "../views/SearchScreen";
import RegisterScreen from "../views/RegisterScreen";
import AdminScreen from "../views/AdminScreen";
import { UserContext } from "../context/UserContext";
import AdminRoute from "./AdminRoute";
import AboutScreen from "../views/AboutScreen";
import { EditProductsContext } from "../context/EditProductsContext";

const RoutesPrincipal = () => {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route
          path="admin"
          element={
            <AdminRoute>
              <EditProductsContext.Provider>
                <AdminScreen />
              </EditProductsContext.Provider>
            </AdminRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default RoutesPrincipal;
