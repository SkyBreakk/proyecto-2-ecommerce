import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { useCart } from "../../context/CartContext";


function MobileToggle({ onOpenCart, onOpenLogin }) {
  const { totalItems } = useCart();

  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-toggle">
     <button
  className="toggle-btn position-relative"
  onClick={() => setOpen(prev => !prev)}
>
  <i className="bi bi-list"></i>

  {totalItems > 0 && (
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {totalItems}
    </span>
  )}
</button>


      {open && (
        <MobileMenu
          onOpenCart={onOpenCart}
          onOpenLogin={onOpenLogin}
        />
      )}
    </div>
  );
}

export default MobileToggle;
