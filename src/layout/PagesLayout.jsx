import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

const PagesLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>{/* Footer */}</footer>
    </>
  );
};

export default PagesLayout;
