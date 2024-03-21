
import { ItemDetail } from "../ItemDetail/ItemDetail";import { useEffect, useState } from "react";
import { getProductById } from "../../service/api/MercadoLibre";
import { useParams } from "react-router";

export function ItemDetailContianer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
        setLoading(false); // Marcar como cargado una vez se obtienen los datos
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false); // En caso de error, marcar como cargado para evitar bucles de renderizado
      }
    };
  
    fetchProduct();
  }, [id]);
 

  return (
    <ItemDetail product={product} loading={loading}  />
  );
}
