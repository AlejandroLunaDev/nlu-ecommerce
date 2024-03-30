
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';



  export function Item({id,img,name,price}) {



  return (
    
    <article className="border border-[#61005D] rounded-md p-3">
      <Tooltip title='Ver Detalle'placement='top'>
      <Link  to={`/product/${id}`}>
      <header className="flex justify-center border-b border-b-[#61005D] ">
        <img className="mb-2 h-24" src={img} alt={name} />
      </header>
      <div className='text-center'>
    <h3 className=" text-md">{name}</h3>
    <p className=" font-semibold">$ {price}</p>
      </div>
    </Link>
      </Tooltip>

  </article>
  )
}
