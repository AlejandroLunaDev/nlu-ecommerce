
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

export function ItemDetail() {
    const { id } = useParams();
    const { products } = useContext(AppContext);
    

    // Buscar el producto por ID en la lista de productos
    const product = products.find((item) => item.id === id);

  
    if (!product) {
      return <p>Producto no encontrado.</p>;
    }
  
    return (
      <article className="border border-[#61005D] rounded-md p-3">
        <header className="flex justify-center border-b border-b-[#61005D]">
          <img className="mb-2" src={product.thumbnail} alt={product.title} />
        </header>
        <p className="text-md font-bold">{product.attributes[0].name}</p>
        <h3 className="text-sm">{product.title}</h3>
        <p className="font-medium">$ {product.price}</p>
      </article>
    );
  }