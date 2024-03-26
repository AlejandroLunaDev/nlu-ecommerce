import { useState, useContext } from 'react';
import { Hambuerguer } from '../icons/Hambuerguer';
import categoriaData from '../Ui/InputSearch/categorias.json';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import {useFilter} from '../../hook/useFilter'; 

export default function NavCategorias() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setProducts } = useContext(CartContext);

  useFilter(setProducts); 

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const handleCategoryClick = async () => {
   
  };

  return (
    <section className='hidden md:block'>
      <button onMouseEnter={handleMouseEnter}>
        <Hambuerguer />
      </button>
      {isMenuOpen && (
        <article
          className="bg-white w-36 rounded-lg shadow shadow-[#61005D] absolute p-2"
          onMouseLeave={handleMouseLeave}
        >
          {categoriaData.categorias.map((categoria, index) => (
            <NavLink
              to={`/categoria/${categoria.name.toLowerCase()}`}
              key={index}
              onClick={() => handleCategoryClick(categoria.name)}
            >
              <p className="hover:border-b border-[#61005D]">{categoria.name}</p>
            </NavLink>
          ))}
        </article>
      )}
    </section>
  );
}
