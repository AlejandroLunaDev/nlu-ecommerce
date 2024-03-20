/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProduct } from "@/service/api/MercadoLibre";
import { importProductsToFirebase } from "../../service/firebase/firebase";
import { AppContext } from "@/context/AppContext";
import { useParams } from "react-router-dom";

export function ItemlistContainer({ limit }) {
  const [products, setProducts] = useState([]);
  const { filterText } = useContext(AppContext);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let searchQuery = category;

        if (filterText) {
          searchQuery = filterText;
        }

        const data = await getProduct(limit, searchQuery);
        setProducts(data);

        // Importar productos a Firebase
        await importProductsToFirebase(limit, searchQuery);
        console.log("Productos importados a Firebase.");
      } catch (error) {
        console.error("Error al obtener productos:", error.message);
      }
    };

    fetchProducts();
  }, [limit, filterText, category]);

  return (
    <div className="item-list-container">
      <h2>Nuestros Productos</h2>
      <ItemList products={products} />
    </div>
  );
}
