import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import ProtectedRoutes from "./ProtectedRoutes";
import PagesLayout from "../layout/PagesLayout";
import SearchScreen from "../views/SearchScreen";

const RoutesPrincipal = () => {
  return (
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="search" element={<SearchScreen />} />
      </Route>
    </Routes>
  );
};

export default RoutesPrincipal;
