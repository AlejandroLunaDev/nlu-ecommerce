import React, { useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import { ItemCount } from '../Ui/ItemCount/ItemCount';

export const SidebarCart = () => {
  const { cart, addToCart,onRemoveCart } = useContext(AppContext);


  return (
    <div className="w-80">
      <header className='border-b '>
      <h3 className='font-bold'>Mi Carrito</h3>

      </header>
      <ul>
        {cart.map((item, index) => (
          <li className='flex' key={index}>
            <img className='h-16' src={item.imagen} alt={item.nombre} />
            <div>
              <span>{item.nombre}</span>
              <p>${item.precio}</p>

              <ItemCount
                 product={item}
                 quantity={item.quantity}
                 onAddCart={() => addToCart(item)}
                 onRemoveCart={() => onRemoveCart(item)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
