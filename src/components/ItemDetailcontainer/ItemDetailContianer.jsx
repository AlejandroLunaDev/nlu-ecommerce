import { doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../service/firebase/firebase";
import { AppContext } from "../../context/AppContext";

export function ItemDetailContianer() {
  const { firestoreId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dentro de ItemDetailContianer.jsx
useEffect(() => {
  console.log("Firestore ID:", firestoreId); // Verificar que firestoreId no sea undefined
  // Resto del código...
}, [firestoreId]);


useEffect(() => {
  const fetchProduct = async () => {
    if (!firestoreId) {
      console.error("Firestore ID is undefined.");
      setLoading(false);
      return;
    }

    const productDocRef = doc(db, 'products', firestoreId);

    try {
      const queryDocumentSnapshot = await getDoc(productDocRef);
      if (queryDocumentSnapshot.exists()) {
        const data = queryDocumentSnapshot.data();
        const productData = { id: firestoreId, ...data };
        setProduct(productData);
        setLoading(false);
      } else {
        console.error("No such product!");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching product: ", error);
      setLoading(false);
    }
  };

  fetchProduct();
}, [firestoreId]);

if (loading) {
  return <div>Loading...</div>;
}

if (!product) {
  return <div>Product not found.</div>;
}

return <ItemDetail product={product} />;
}