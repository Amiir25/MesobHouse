import React, { createContext, useContext, useState } from "react";
import Spinner from "../ui/Spinner";

const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("savedCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleAddToCart = (type, dish = {}) => {
    const { id } = dish;

    // Check if dish is on cart
    const existing = cart.find((dish) => dish.id === id);

    // Calculate item add, subtract & remove
    if (type === "add") {
      if (existing) {
        setCart(prevCart =>
          cart.map((dish) =>
            dish.id === id ? { ...dish, qty: dish.qty + 1 } : dish,
          ),
        );
      } else {
        setCart(prevCart => [...cart, { ...dish, qty: 1 }]);
      }

    } else if (type === "sub") {
      if (dish.qty === 0) return "Can't go below 0";
      setCart(prevCart =>
        cart.map((dish) =>
          dish.id === id ? { ...dish, qty: dish.qty - 1 } : dish,
        ),
      );

    } else if (type === "remove") {
      setCart(prevCart => cart.filter(dish => dish.id !== id));
    } else if (type === "clear") {
      localStorage.removeItem("savedCart")
      setCart([]);
    }
  };

  // Calculate Prices
  const subtotal = cart.reduce(
    (sum, item) => sum + item.priceETB * item.qty,
    0,
  );
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  // Save cart data to localStorage
  localStorage.removeItem("savedCart");
  localStorage.setItem("savedCart", JSON.stringify(cart));

  return (
    <CartContext.Provider
      value={{
        cart,
        onAddToCart: handleAddToCart,
        subtotal,
        vat,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CarProvider;

// useCart
export const useCar = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("Error getting cart data!");

  return context;
};
