
import { ItemList } from "../ItemList/ItemList";
import { useAsync } from "../../hook/useAsync";
import { memo } from "react"
import { getProducts } from "../../service/firebase/firestore/products"
import { useParams } from "react-router-dom"

const ItemListMemoized = memo(ItemList)

export function ItemlistContainer({ greeting }) {
  const { categoryId } = useParams()
  const asyncFunction = () =>  getProducts(categoryId)
  const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])
  if(loading) {
    return <h1>Se estan cargando los productos...</h1>
}

if(error) {
    return <h1>Hubo un error al cargar los productos</h1>
}

  return (
    <div className="item-list-container">
      <h2 className="my-4 font-bold">Nuestros Productos</h2>
      <ItemListMemoized products={products}/>
    </div>
  );
}
