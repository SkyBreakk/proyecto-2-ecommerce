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

        {/* Buscador */}
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

        {/* Menú mobile */}
        <div className="navbar-mobile d-flex d-md-none">
          <MobileToggle 
            onOpenCart={() => setOpenCart(true)}
            onOpenLogin={() => setOpenLogin(true)}
          />
        </div>

      </nav>

      {/* MODALS CORREGIDOS */}
      <CartModal 
        open={openCart} 
        onClose={() => setOpenCart(false)} 
      />

      <LoginModal 
        open={openLogin} 
        onClose={() => setOpenLogin(false)} 
      />
    </>
  );
}

export default NavBar;
