import { ItemList } from "../ItemList/ItemList";
import { useProductList } from '../../hook/useProductList.js';

export function ItemlistContainer({ limit }) {
  const products = useProductList(limit);

  return (
    <div className="item-list-container">
      <h2 className="my-4 font-bold">Nuestros Productos</h2>
      <ItemList products={products} />
    </div>
  );
}
