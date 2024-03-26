
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from 'react-router-dom';
import { AddToCartButton } from "../Button/AddToCartButton";


  export function Item({product}) {
const {addToCart} = useContext(CartContext)


  return (
    
    <article className="border border-[#61005D] rounded-md p-3">
      <Link  to={`/product/${product.firestoreId}`}>
      <header className="flex justify-center border-b border-b-[#61005D] ">
        <img className="mb-2 h-24" src={product.imagen} alt={product.nombre} />
      </header>
    <h3 className=" text-sm">{product.nombre}</h3>
    <p className=" font-medium">$ {product.precio}</p>
    </Link>
    <div className="flex justify-center mt-6">
    <AddToCartButton onClick={()=> addToCart(product)} text={'Agregar'} />
    </div>
  </article>
  )
}
