import { AddToCartButton } from "../Ui/Button/AddToCartButton";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";


export function ItemDetail({products}) {

  const {addToCart} = useContext(AppContext)


  return (
    <section>
    <article className="">
      <header className=" ">
        <img className=" h-14" src={products?.imagen} alt={products?.nombre} />
      </header>
      <div>
      <h3 className="">{products?.nombre}</h3>
      <p className="">$ {products?.precio}</p>
      <h3 className="font-bold">Descripción</h3>
      <p>{products?.descripcion}</p>
      </div>
    </article>
    <aside>
      <AddToCartButton onClick={()=> addToCart(products)} text={'Agregar'}/>
    </aside>

    </section>
  );
}

export function ItemDetailContianer() {
  return (
    <ItemDetail />
  );
}
