import { AddToCartButton } from "../Ui/Button/AddToCartButton";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export function ItemDetail({ products }) {
  const { addToCart,cart } = useContext(CartContext);
console.log(cart)

  const handleAddToCart = () => {
    // Verificar si el producto ya está en el carrito
    const isProductInCart = cart.some(item => item.firestoreId === products?.firestoreId);
    if (!isProductInCart) {
      addToCart(products);
    } else {
      console.log("El producto ya está en el carrito.");
      // Puedes mostrar una notificación o mensaje al usuario indicando que el producto ya está en el carrito
    }
  };

  return (
    <section className="flex-none md:flex gap-4">
      <article className="">
        <header className=" ">
          <img
            className=" h-44 md:h-[400px]"
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
          <p className="text-[11px] md:text-sm">{products?.descripcion}</p>
        </article>
        <div className=" w-60 mt-8">
          <AddToCartButton
            onClick={handleAddToCart}
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
