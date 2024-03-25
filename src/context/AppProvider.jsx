import { useState } from "react";
import { AppContext } from "./AppContext";


export function AppProvider({ children }) {
  // GLOBAL CONTEXT //
  const [count, setCount] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  const addToCart = (productToAdd) => {
    const productIndex = cart.findIndex((item) => item.firestoreId === productToAdd.firestoreId);
  
    if (productIndex !== -1) {
      
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Producto nuevo: agregar al carrito con cantidad 1
      setCart((prevCart) => [...prevCart, { ...productToAdd, quantity: 1 }]);
    }
  
    setCount((prevCount) => prevCount + 1); // Incrementar contador total
  };

  const onRemoveCart = (productToRemove) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item.firestoreId === productToRemove.firestoreId);
  
    if (productIndex !== -1) {
      updatedCart[productIndex].quantity -= 1;
      if (updatedCart[productIndex].quantity === 0) {
        // Si la cantidad del producto es cero, eliminar el producto del carrito
        updatedCart.splice(productIndex, 1);
      }
      setCart(updatedCart);
      setCount((prevCount) => prevCount - 1); // Decrementar contador total
    }
  };
  

  const removeProductFromCart = (productToRemove) => {
    const updatedCart = cart.filter(item => item.firestoreId !== productToRemove.firestoreId);
    setCart(updatedCart);
    setCount(prevCount => prevCount - productToRemove.quantity); // Decrementar contador total
  };


  const removeAllProductFromCart = (productToRemove) => {
    setCart([])
    setCount(0)
  };
  return (
    <AppContext.Provider
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
        removeAllProductFromCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
