import { doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {  useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../service/firebase/firebase";


export function ItemDetailContainer() {
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



  return (
    <section className=" h-dvh flex items-center justify-center">

      <ItemDetail products={item} />
    </section>
  );
}
