import { Cart } from "@/components/icons/Cart";
import { AppContext } from "../../../context/AppContext";
import { useContext } from "react";


export default function CardWidget() {
const {count} = useContext(AppContext)

  return (
    <article className="flex">
        <Cart />
    <div className=" bg-[#61005D] text-white rounded-full text-center text-sm w-5 h-5">
        {count}
    </div>
    </article>
  )
}
