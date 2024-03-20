/* eslint-disable no-unused-vars */

import { useTypewriter } from "react-simple-typewriter";
import categoriasData from "./categorias.json";
import { IoIosSearch } from "react-icons/io";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function InputSearch() {
  const { filterText, setFilterText } = useContext(AppContext);
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const searchQuery = event.target.value.trim();
      if (searchQuery) {
        setFilterText(searchQuery);
        navigate(`/search/${searchQuery}`);
      } else {
        navigate("/");
        setFilterText("");
      }
    }
  };

  const categorias = categoriasData.categorias.map(
    (categoria) => categoria.name
  );

  const [text] = useTypewriter({
    words: categorias,
    loop: {},
    typeSpeed: 120,
  });

  return (
    <form className="relative">
      <input
        type="text"
        placeholder={`Buscar "${text}"`}
        className="border border-gray-500 focus:outline-[#61005D] px-4 py-1 w-80 rounded-md"
        /*  onChange={handleInputChange} */
        onKeyDown={handleKeyDown}
      />
      <IoIosSearch className="searchIcon absolute right-2 top-0 translate-y-2/4" />
    </form>
  );
}
