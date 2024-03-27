
import { ItemList } from "../ItemList/ItemList";

export function ItemlistContainer({ limit }) {

  return (
    <div className="item-list-container">
      <h2 className="my-4 font-bold">Nuestros Productos</h2>
      <ItemList />
    </div>
  );
}
