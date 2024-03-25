
import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { db } from "../service/firebase/firebase";
import { collection,getDocs, query,where } from "firebase/firestore";
import { useParams } from "react-router";

export function AppProvider({ children }) {
  // GLOBAL CONTEXT //
  const [count, setCount] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [products, setProducts] = useState([]);
  const categoria = useParams().categoria

  useEffect(() => {
    const productRef= collection(db, 'products')
    const q = categoria ? query(productRef, where('categoria', '==', categoria)) : productRef; 

  getDocs(q)
    .then((resp)=>{
      setProducts(
        resp.docs.map((doc)=> {
          return {...doc.data(), firestoreId: doc.id}
        })
        )
      })
    }, [categoria])
    


 
    


  return (
    <AppContext.Provider value={{ count, setCount, filterText, setFilterText,products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
}
