import { useContext } from "react";
import { Item } from "../Ui/Item/Item";
import { AppContext } from "../../context/AppContext";

export function ItemList() {
  const {products} = useContext(AppContext)
  return (
    <section className="card-container gap-2">
      {products.map((product) => (
       <Item key={`${product.firestoreId}`} product={product} />
      ))}
    </section>
  );
}
