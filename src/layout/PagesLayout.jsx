import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import FooterApp from "../components/FooterApp";

const PagesLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterApp />
      </footer>
    </>
  );
};

export default PagesLayout;
