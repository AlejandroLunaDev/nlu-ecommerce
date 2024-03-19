
import { useTypewriter } from "react-simple-typewriter";
import categoriasData from "./categorias.json";
import { IoIosSearch } from "react-icons/io";

export function InputSearch() {



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
      />
      <IoIosSearch className="searchIcon absolute right-2 top-0 translate-y-2/4" />
    </form>
  );
}
