import { Tooltip } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { Link } from 'react-router-dom';


  export function Item({product}) {
const {count,setCount, products} = useContext(AppContext)
console.log(product.firestoreId)
const handleAddClick = () => {
  setCount(count + 1); 
};


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
    <button className="bg-[#61005D] text-white rounded-md py-3 w-full" onClick={handleAddClick }>
      Agregar
    </button>
    </div>
  </article>
  )
}
