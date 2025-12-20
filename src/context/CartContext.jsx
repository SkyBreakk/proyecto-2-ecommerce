import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // 1) Cargar carrito desde localStorage (una sola vez)
  const [cart, setCart] = useState(() => {
    const raw = localStorage.getItem("cart");
    return raw ? JSON.parse(raw) : [];
  });

  // 2) Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 3) Agregar al carrito (si existe, suma qty)
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);

      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // 4) Aumentar cantidad
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  // 5) Disminuir cantidad (si queda en 0, lo saca)
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  // 6) Eliminar producto
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // 7) Vaciar carrito (opcional)
  const clearCart = () => setCart([]);

  // 8) Total de items (suma qty)
  const totalItems = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.qty, 0);
  }, [cart]);

  // 9) Total $ (price * qty)
  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }, [cart]);

  const value = {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Hook seguro (si no hay Provider, tira error claro)
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
};
