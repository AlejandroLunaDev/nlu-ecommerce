import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { useAsync } from "../../hook/useAsync";
import { getProductById } from "../../service/firebase/firestore/products";

export function ItemDetailContainer() {
  const { itemId } = useParams();
  const asyncFunction = () => getProductById(itemId);
  const { data: product, loading, error } = useAsync(asyncFunction, [itemId]);

  if (loading) {
    return <h1>Se esta cargando el producto...</h1>;
  }

  if (error) {
    return <h1>Hubo un error obteniendo el producto.</h1>;
  }

  return (
    <section className=" h-dvh flex items-center justify-center">
      <ItemDetail {...product} />
    </section>
  );
}
