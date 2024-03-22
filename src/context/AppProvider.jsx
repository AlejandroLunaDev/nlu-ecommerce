
import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { db } from "../service/firebase/firebase";
import { collection,getDocs } from "firebase/firestore";

export function AppProvider({ children }) {
  // GLOBAL CONTEXT //
  const [count, setCount] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [products, setProducts] = useState([]);

useEffect(() => {
const productRef= collection(db, 'products')



  getDocs(productRef)
    .then((resp)=>{
      setProducts(
        resp.docs.map((doc)=> {
          return {...doc.data(), firestoreId: doc.id}
        })

      )

    })
}, [])

  

  return (
    <AppContext.Provider value={{ count, setCount, filterText, setFilterText,products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
}
