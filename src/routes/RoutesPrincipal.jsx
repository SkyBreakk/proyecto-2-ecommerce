import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import ProtectedRoutes from "./ProtectedRoutes";
import PagesLayout from "../layout/PagesLayout";

const RoutesPrincipal = () => {
  return (
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        <Route index element={<HomeScreen />} />
      </Route>
    </Routes>
  );
};

export default RoutesPrincipal;
