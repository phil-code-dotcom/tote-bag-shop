import { User, ShoppingCart, Menu } from "lucide-react";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="flex items-center justify-between md:px-10 py-4 font-raleway">
      <div className="hidden md:flex gap-6 text-sm">
        <a href="#" className="">HOME</a>
        <a href="#" className="border-b-4 border-[#06201c]">SHOP</a>
      </div>

      <h1 className="text-lg md:text-[36px] font-light tracking-[0.2px]">thetotebagshop®</h1>

      <div className="flex gap-2">
        <Button variant="plain"><User size={20} /></Button>
        <Button variant="plain"><ShoppingCart size={20} /></Button>
        <div className="md:hidden">
          <Button variant="plain"><Menu size={20} /></Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;