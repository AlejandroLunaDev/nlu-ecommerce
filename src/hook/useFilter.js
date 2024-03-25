import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/service/firebase/firebase';

export const useFilter = (setProducts) => {
  const { categoria } = useParams();
  

  useEffect(() => {
    const productRef = collection(db, 'products');
    const q = categoria ? query(productRef, where('categoria', '==', categoria)) : productRef; 
  
    getDocs(q)
    .then((resp) => {
      const productsData = resp.docs.map((doc) => ({
        ...doc.data(),
        firestoreId: doc.id
      }));
      setProducts(productsData);
    }).catch((error) => {
      console.error("Error fetching products:", error);
    });
  }, [categoria,setProducts]);};


