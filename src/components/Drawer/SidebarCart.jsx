import React, { useContext } from 'react';
import { AppContext } from '@/context/AppContext';
import { ItemCount } from '../Ui/ItemCount/ItemCount';
import { CheckOutButton } from '../Ui/Button/CheckOutButton';
import { AiOutlineClose } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import {Cart} from '../icons/Cart'
import { useNavigate } from "react-router"

export const SidebarCart = ({ isOpen, setOpen }) => {
  const { cart, addToCart, onRemoveCart,removeProductFromCart,removeAllProductFromCart } = useContext(AppContext);
  const navigate = useNavigate()
  const subtotal = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0).toFixed(2);
  const descuento = 0;
  const total = subtotal - descuento;

  const handleRemoveItem = (item) => {
    removeProductFromCart(item)
  };

  const handleCheckout = () => {
    navigate('/CheckOut');
    setOpen(false) 
  };

  const handleRemoveCartAll = () => {
    removeAllProductFromCart()
  };

  return (
    <div className="w-96 p-2 h-full">
      <header className='border-b flex justify-between px-4 '>
        <h3 className='font-bold'>Mi Carrito</h3>
        <button className='text-xl' onClick={() => setOpen(false)}>
          <AiOutlineClose />
        </button>
      </header>
      {cart.length > 0 ? (
        <div>
          <ul className='overflow-y-auto max-h-[450px] mb-5'>
            {cart.map((item, index) => (
              <li className='flex' key={index}>
                <div>
                  <button onClick={() => handleRemoveItem(item)}>
                  <AiOutlineClose />
                  </button>
                <img className='h-16' src={item.imagen} alt={item.nombre} />
                </div>
                <div>
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
            <span>${total}</span> 
          </div>
          <div className='px-2'>
            <CheckOutButton text={'Comprar Ahora'} onClick={handleCheckout} />
          </div>
          <div className='px-2 mt-7'>
            <button className='w-full flex justify-center' onClick={removeAllProductFromCart}>
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
    </div>
  );
};
