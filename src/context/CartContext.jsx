import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [count, setCount] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    const productIndex = cart.findIndex(
      (item) => item.firestoreId === productToAdd.firestoreId
    );

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...productToAdd, quantity: 1 }]);
    }
    setCount((prevCount) => prevCount + 1);
  };

  const onRemoveCart = (productToRemove) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.firestoreId === productToRemove.firestoreId
    );

    if (productIndex !== -1) {
      updatedCart[productIndex].quantity -= 1;
      if (updatedCart[productIndex].quantity === 0) {
        updatedCart.splice(productIndex, 1);
      }
      setCart(updatedCart);
      setCount((prevCount) => prevCount - 1);
    }
  };

  const removeProductFromCart = (productToRemove) => {
    const updatedCart = cart.filter(
      (item) => item.firestoreId !== productToRemove.firestoreId
    );
    setCart(updatedCart);
    setCount((prevCount) => prevCount - productToRemove.quantity);
  };

  const clearCart = (productToRemove) => {
    setCart([]);
    setCount(0);
  };
  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        filterText,
        setFilterText,
        products,
        setProducts,
        cart,
        setCart,
        addToCart,
        onRemoveCart,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
