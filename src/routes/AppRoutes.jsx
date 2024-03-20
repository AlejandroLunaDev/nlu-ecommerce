import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Navbar } from "@/layout/Navbar";
import { Error404, Home } from "../pages";
import { ItemlistContainer } from "../components/ItemListContainer/ItemlistContainer";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/categorias/:category" element={<ItemlistContainer limit={30} />} />
          <Route path={"/search/:searchQuery"} element={<ItemlistContainer limit={20} />} />
        </Route>
          <Route path={routes.error} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
