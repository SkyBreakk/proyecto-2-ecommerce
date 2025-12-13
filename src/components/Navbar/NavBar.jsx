import { useState } from "react";
import "../../assets/css/NavBarApp.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";
import MobileToggle from "./MobileToggle";
import CartModal from "../modals/CartModal";
import LoginModal from "../modals/LoginModal";

function NavBar() {

  const [openCart, setOpenCart] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <nav className="navbar-app">

        {/* Logo desktop */}
        <div className="navbar-left d-none d-md-flex">
          <Logo />
        </div>

        {/* Buscador siempre visible */}
        <div className="navbar-center">
          <SearchBar />
        </div>

        {/* Menú desktop */}
        <div className="navbar-right d-none d-md-flex">
          <NavMenu 
            onOpenCart={() => setOpenCart(true)}
            onOpenLogin={() => setOpenLogin(true)}
          />
        </div>

        {/* Mobile toggle */}
        <div className="navbar-mobile d-flex d-md-none">
          <MobileToggle 
            onOpenCart={() => setOpenCart(true)}
            onOpenLogin={() => setOpenLogin(true)}
          />
        </div>

      </nav>

      {/* MODALS */}
      {openCart && <CartModal onClose={() => setOpenCart(false)} />}
      {openLogin && <LoginModal onClose={() => setOpenLogin(false)} />}
    </>
  );
}

export default NavBar;
