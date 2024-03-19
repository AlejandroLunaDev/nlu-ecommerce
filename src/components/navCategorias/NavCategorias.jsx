/* eslint-disable react/prop-types */
import { useState } from "react";
import { Hambuerguer } from "../icons/Hambuerguer";
import categoriaData from "../Ui/InputSearch/categorias.json";
import { NavLink } from "react-router-dom";

export default function NavCategorias({ handleCategoryChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const handleCategoryClick = (categoria) => {
    handleCategoryChange(categoria);
    setIsMenuOpen(false); // Cerrar el menú al seleccionar una categoría
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
              <p>{categoria.name}</p>
            </NavLink>
          ))}
        </article>
      )}
    </section>
  );
}
