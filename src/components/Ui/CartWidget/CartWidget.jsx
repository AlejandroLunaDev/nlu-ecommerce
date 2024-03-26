import { Cart } from "@/components/icons/Cart";
import { CartContext } from "../../../context/CartContext";
import { useContext, useState } from "react";
import {SidebarCart} from "../../Drawer/SidebarCart";
import { Drawer } from "@mui/material";

export function CartWidget() {
  const { count } = useContext(CartContext);

  const [open, setOpen] = useState(false);

  return (
    <article className="flex">
      <button onClick={() => setOpen(true)}>
        <Cart />
      </button>
      <div className=" bg-[#61005D] text-white rounded-full text-center text-sm w-5 h-5">
        {count}
      </div>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <SidebarCart isOpen={open} setOpen={setOpen}  />
      </Drawer>
    </article>
  );
}
