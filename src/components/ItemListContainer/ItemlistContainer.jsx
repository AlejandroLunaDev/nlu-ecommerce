import { useContext, useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../service/firebase/firebase";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom"; // Agregar import para useParams

export function ItemlistContainer({ limit }) {
  const { firestoreId } = useParams(); // Obtener firestoreId de la URL de la ruta
  const { products, setProducts } = useContext(AppContext);
  const [render, setRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRender(prev => !prev);
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productCollection = collection(db, 'products');
        const querySnapshot = await getDocs(productCollection);
        const productsData = querySnapshot.docs.map(doc => ({
          firestoreId: doc.id,
          id: doc.data().id,
          ...doc.data()
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, [firestoreId, setProducts]);

  return (
    <div className="item-list-container">
      <h2 className="my-4 font-bold">Nuestros Productos</h2>
      <ItemList products={products} />
    </div>
  );
}
