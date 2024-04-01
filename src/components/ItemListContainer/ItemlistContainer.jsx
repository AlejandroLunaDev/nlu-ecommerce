import { ItemList } from "../ItemList/ItemList";
import { useAsync } from "../../hook/useAsync";
import { memo } from "react";
import { getProducts } from "../../service/firebase/firestore/products";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ItemListMemoized = memo(ItemList);

export function ItemlistContainer({ greeting }) {
  const { categoryId } = useParams();
  const location = useLocation();
  const isSearchPage = location.pathname.includes("/search/");
  let categoryToFetch = categoryId;

  if (isSearchPage) {
    categoryToFetch = location.pathname.split("/search/")[1];
  }
  const asyncFunction = () => getProducts(categoryToFetch);
  const {
    data: products,
    loading,
    error,
  } = useAsync(asyncFunction, [categoryToFetch]);
  if (loading) {
    return <h1>Se estan cargando los productos...</h1>;
  }

  if (error) {
    return <h1>Hubo un error al cargar los productos</h1>;
  }

  return (
    <div className="item-list-container">
      <h2 className="my-4 font-bold">Nuestros Productos</h2>
      <ItemListMemoized products={products} />
    </div>
  );
}
