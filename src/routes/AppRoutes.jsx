import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Navbar } from "@/layout/Navbar";
import { Error404, Home } from "../pages";
import { ItemlistContainer } from "../components/ItemListContainer/ItemlistContainer";
import {ItemDetailContianer} from '../components/ItemDetailcontainer/ItemDetailContianer';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/categoria/:categoria" element={<ItemlistContainer limit={32} />} />
          <Route path={"/search/:categoria"} element={<ItemlistContainer limit={20} />} />
          <Route path="/product/:firestoreId" element={<ItemDetailContianer />} />
        </Route>
          <Route path={routes.error} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
