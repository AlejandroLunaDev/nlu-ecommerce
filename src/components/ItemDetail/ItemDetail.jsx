import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Add, Remove } from "@/components";

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex justify-between">
      <button className="border rounded-sm flex items-center justify-center" onClick={decrement}>
        <Remove />
      </button>
      <p className='text-[13px] border rounded-sm px-3 flex items-center'>{count}</p>
      <button className="border rounded-sm flex items-center justify-center" onClick={increment}>
        <Add />
      </button>
      <button
        className="bg-[#61005D] rounded text-center text-white py-1 px-2"
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export function ItemDetail({
  id,
  name,
  category,
  img,
  price,
  stock,
  description,
  sku,
}) {
  const ItemCount = ButtonCount;
  const { addItem, isInCart } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    const objProductToAdd = {
      id,
      name,
      price,
      quantity,
      img,
      stock,
    };

    addItem(objProductToAdd);
  };

  return (
    <section className="flex-none md:flex gap-4">
      <article className="">
        <header className=" ">
          <img className=" h-44 md:h-[400px]" src={img} alt={name} />
        </header>
      </article>
      <aside className="border-l pl-8">
        <article>
          <header className="mb-10">
            <h3 className="font-semibold text-xl mb-2">{name}</h3>
            <div className="flex font-semibold text-sm gap-2">
              <p className="border-r border-black pr-3">SKU</p>
              <p>{sku}</p>
            </div>
          </header>
          <p className="font-bold mb-5">$ {price}</p>
          <h3 className="font-bold">Categoria</h3>
          <p>{category}</p>
          <h3 className="font-bold">Descripción</h3>
          <p className="text-[11px] md:text-sm">{description}</p>
        </article>
        <div className=" w-60 mt-8">
          {!isInCart(id) ? (
            <ItemCount onAdd={handleOnAdd} stock={stock} />
          ) : (
            <div className="bg-[#61005D] rounded text-center text-white py-1">
              <Link to="/CheckOut">Finalizar Compra</Link>
            </div>
          )}
        </div>
      </aside>
    </section>
  );
}
