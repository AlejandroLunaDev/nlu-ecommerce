
import { useState } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
  // GLOBAL CONTEXT //
  const [count, setCount] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [products, setProducts] = useState([]);

  return (
    <AppContext.Provider value={{ count, setCount, filterText, setFilterText,products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
}
