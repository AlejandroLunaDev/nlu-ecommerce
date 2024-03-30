import React, { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import { ItemCount } from '../Ui/ItemCount/ItemCount'; // Asegúrate de importar el componente correctamente
import { CheckOutButton } from '../Ui/Button/CheckOutButton';
import { AiOutlineClose } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import {Cart} from '../icons/Cart'
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom';

export const SidebarCart = ({ isOpen, setOpen }) => {
  const { cart, clearCart, removeItem, total} = useContext(CartContext);
  const navigate = useNavigate();
  const subtotal = total.toFixed(2);
  const descuento = 0;
  const totalf = subtotal - descuento;
  const handleRemoveItem = (item) => {
    removeItem(item.id);
  };

  const handleCheckout = () => {
    navigate('/CheckOut');
    setOpen(false);
  };

  return (
    <section className="w-96 p-2 h-full">
      <header className='border-b flex justify-between px-4 '>
        <h3 className='font-bold'>Mi Carrito</h3>
        <button className='text-xl ' onClick={() => setOpen(false)}>
          <AiOutlineClose />
        </button>
      </header>
      {cart.length > 0 ? (
        <div className='mt-4'>
          <ul className='overflow-y-auto max-h-[450px] mb-5'>
            {cart.map((item) => (
              <li className='flex gap-6' key={item.id}>
                <div className='flex gap-1'>
                  <button className='border border-black rounded-full mt-4 p-1 h-6 w-6 flex items-center justify-center' onClick={() => handleRemoveItem(item)}>
                    <AiOutlineClose />
                  </button>
                  <Link to={`/product/${item.id}`} onClick={() => setOpen(false)} className=' w-36'>
                    <img className=' h-28' src={item.img} alt={item.name} />
                  </Link>
                </div>
                <div>
                  <div>
                    <span>{item.name}</span>
                    <p className='mb-3'>${item.price}</p>
                    <ItemCount productId={item.id} stock={item.stock} /> 
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className='flex justify-between'>
            <p>Subtotal</p>
            <span>${subtotal}</span> 
          </div>
          <div className='flex justify-between'>
            <p>Descuentos</p>
            <span>-${descuento}</span> 
          </div>
          <div className='flex justify-between'>
            <p className='font-bold'>Total</p>
            <span>${totalf}</span> 
          </div>
          <div className='px-2'>
            <CheckOutButton text={'Comprar Ahora'} onClick={handleCheckout} />
          </div>
          <div className='px-2 mt-7'>
            <button className='w-full flex justify-center' onClick={clearCart}>
              <BsTrash className=' w-8 h-8' />
            </button>
          </div>
        </div>
      ) : (
        <section className='flex justify-center items-center flex-col h-full'>
          <Cart />
          <p className="text-center my-4">Tu carrito se encuentra vacío.</p>
        </section>
      )}
    </section>
  );
};
