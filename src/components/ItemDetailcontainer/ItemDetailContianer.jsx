import { doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../service/firebase/firebase";
import { AppContext } from "../../context/AppContext";

export function ItemDetailContianer() {

  const [item, setItem] = useState(null)
  const id = useParams().firestoreId;
 
  useEffect(() => {
 const docRef = doc(db,'products', id)

 getDoc(docRef)
    .then((resp)=> {
      setItem(
        {...resp.data(), id: resp.id}
      )
    })
 }, [id])
 

return(
<>
{item && <ItemDetail item={item} /> }
</>

)
}