import { useContext } from "react";
import { Item } from "../Ui/Item/Item";
import { CartContext } from "../../context/CartContext";

export function ItemList() {
  const {products} = useContext(CartContext)
  return (
    <section className="card-container gap-2">
      {products.map((product) => (
       <Item key={`${product.firestoreId}`} product={product} />
      ))}
    </section>
  );
}
