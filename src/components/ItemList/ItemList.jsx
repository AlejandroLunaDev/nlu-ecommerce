import { Item } from "../Ui/Item/Item";

export function ItemList({ products }) {
  return (
    <section className="card-container gap-2">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </section>
  );
}
