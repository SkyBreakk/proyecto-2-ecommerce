import { useState } from "react";
import MobileMenu from "../MobileMenu";

function MobileToggle({ onOpenCart, onOpenLogin }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-toggle">
      <button
        className="toggle-btn"
        onClick={() => setOpen(prev => !prev)}
      >
        <i className="bi bi-list"></i>
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
