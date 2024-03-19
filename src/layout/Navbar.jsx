import { NavLink, Outlet } from "react-router-dom";
import { Alert, Box, Chat, Nolouso } from "../components";
import { routes } from "../routes/routes";
import { InputSearch } from "../components/Ui/InputSearch/InputSearch";
import CardWidget from "../components/Ui/CardWidget/CardWidget";
import NavCategorias from "../components/navCategorias/NavCategorias";

export function Navbar() {
  const handleCategoryChange = (categoria) => {

    console.log('Categoría seleccionada:', categoria);
  };
  return (
    <>
      <header className="w-full border-b-[1px] border-[#61005D]">
        <nav className="flex items-center p-2 gap-10">
          <section className="flex items-center gap-3">
            <NavLink to={routes.home}>
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
