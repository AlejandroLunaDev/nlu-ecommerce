import { NavLink, Outlet } from "react-router-dom";
import { Alert, Box, Chat, Nolouso } from "../components";
import { routes } from "../routes/routes";
import { InputSearch } from "../components/Ui/InputSearch/InputSearch";
import CardWidget from "../components/Ui/CardWidget/CardWidget";
import NavCategorias from "../components/navCategorias/NavCategorias";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export function Navbar() {
  const { filterText, setFilterText } = useContext(AppContext);
  const handleCategoryChange = (categoria) => {
    setFilterText(categoria);
  
  };

  const handleLogoClick = () => {
    setFilterText('');
    document.querySelector('.border-gray-500').value = '';  
  };
  return (
    <>
      <header className="w-full border-b-[1px] border-[#61005D]">
        <nav className="flex items-center p-2 gap-10">
          <section className="flex items-center gap-3">
            <NavLink to={routes.home} onClick={handleLogoClick}>
              <Nolouso />
            </NavLink>
            <InputSearch />
            <NavCategorias handleCategoryChange={handleCategoryChange} />
          </section>
          <section>
            <ul className="flex gap-4">
              <li>
                <NavLink className="flex gap-2">
                  <Box />
                  Mis Anuncios
                </NavLink>
              </li>
              <li>
                <NavLink className="flex gap-2">
                  <Chat />
                  Chat
                </NavLink>
              </li>
              <li>
                <NavLink className="flex gap-2">
                  <Alert />
                  Notificaciones
                </NavLink>
              </li>
            </ul>
          </section>
          <CardWidget />
        </nav>
      </header>
      <Outlet />
    </>
  );
}
