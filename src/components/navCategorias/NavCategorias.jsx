/* eslint-disable react/prop-types */
import { useState } from "react";
import { Hambuerguer } from "../icons/Hambuerguer";
import categoriaData from "../Ui/InputSearch/categorias.json";
import { NavLink, useNavigate } from "react-router-dom";
import { importProductsToFirebase } from '../../service/firebase/firebase';

export default function NavCategorias({ handleCategoryChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const handleCategoryClick = async (categoria) => {
    await importProductsToFirebase('', categoria.name); 
    navigate(`/categorias/${categoria.name.toLowerCase()}`); 
    handleCategoryChange(categoria.name); 
  };

  return (
    <section>
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
            to={`/categorias/${categoria.name.toLowerCase()}`} 
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
