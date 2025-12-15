import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import ProtectedRoutes from "./ProtectedRoutes";
import PagesLayout from "../layout/PagesLayout";
import RegisterScreen from "../views/RegisterScreen"
import AdminScreen from "../views/AdminScreen";

const RoutesPrincipal = () => {
  return (
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="register" element={<RegisterScreen/>}/>
        <Route path="admin" element={<AdminScreen/>}/>
      </Route>
    </Routes>
  );
};

export default RoutesPrincipal;
