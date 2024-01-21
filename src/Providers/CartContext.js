import { createContext, useContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  }
  const removeFromCart = (index) => {
    const updatedCart = [];
    setCart(updatedCart);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}> {children} </CartContext.Provider>
  )
}
export function useCart() {
  return useContext(CartContext); // Hook custom pour utiliser ce context card partout ou il est importé
}
