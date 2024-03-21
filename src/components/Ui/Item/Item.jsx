import { Tooltip } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { Link } from 'react-router-dom';


export function Item({product}) {
const {count,setCount} = useContext(AppContext)

const handleAddClick = () => {
  setCount(count + 1); 
};

  const truncatedTitle = product.title.length > 20 ? `${product.title.slice(0,20)}...` : product.title;
  return (
    
    <article className="border border-[#61005D] rounded-md p-3">
      <Link  to={`/product/${product.databaseId}`}>
      <header className="flex justify-center border-b border-b-[#61005D] ">
        <img className="mb-2" src={product.thumbnail} alt={product.title} />
      </header>
    <p className="text-md font-bold">{product.attributes[0].name}</p>
    <Tooltip className=" mt-8" title={product.title.length > 10 ? product.title : ''}>
    <h3 className=" text-sm">{truncatedTitle}</h3>
    </Tooltip>
    <p className=" font-medium">$ {product.price}</p>
    </Link>
    <div className="flex justify-center mt-6">
    <button className="bg-[#61005D] text-white rounded-md py-3 w-full" onClick={handleAddClick }>
      Agregar
    </button>
    </div>
  </article>
  )
}
