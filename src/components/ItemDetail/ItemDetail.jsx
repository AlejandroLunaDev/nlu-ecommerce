import { AddToCartButton } from "../Ui/Button/AddToCartButton";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export function ItemDetail({ products }) {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="flex gap-4">
      <article className="">
        <header className=" ">
          <img
            className=" h-[500px]"
            src={products?.imagen}
            alt={products?.nombre}
          />
        </header>
      </article>
      <aside className="border-l pl-8">
        <article>
          <header className="mb-10">
          <h3 className="font-semibold text-xl mb-2">{products?.nombre}</h3>
          <div className="flex font-semibold text-sm gap-2">
            <p className="border-r border-black pr-3">SKU</p>
            <p>{products?.sku}</p>
          </div>
          </header>
          <p className="font-bold mb-5">$ {products?.precio}</p>
          <h3 className="font-bold">Categoria</h3>
          <p>{products?.categoria}</p>
          <h3 className="font-bold">Descripción</h3>
          <p>{products?.descripcion}</p>
        </article>
        <div className=" w-60 mt-8">
          <AddToCartButton
            onClick={() => addToCart(products)}
            text={"Agregar"}
          />
        </div>
      </aside>
    </section>
  );
}

export function ItemDetailContianer() {
  return <ItemDetail />;
}
