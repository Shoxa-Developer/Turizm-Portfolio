import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b sticky top-0 left-0 z-50 bg-[#e8e4dc]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="logo.png" alt="logo" className="w-20 h-15" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-[17px] font-bold text-gray-700">
          <li className="hover:text-[#c89b3c] cursor-pointer">
            <a href="#home">Главная</a>
          </li>
          <li className="hover:text-[#c89b3c] cursor-pointer">
            <a href="#about">О нас</a>
          </li>
          <li className="hover:text-[#c89b3c] cursor-pointer">
            <a href="#historical">История о Узбекистане</a>
          </li>
          <li className="hover:text-[#c89b3c] cursor-pointer">
            <a href="#gallery">Контакты</a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 pb-6 text-[17px] font-bold text-gray-700 bg-[#e8e4dc]">
          <li className="hover:text-[#c89b3c] cursor-pointer">
            <a href="#home">Главная</a>
          </li>
          <li className="hover:text-[#c89b3c] cursor-pointer">
            <a href="#about">О нас</a>
          </li>
          <li className="hover:text-[#c89b3c] cursor-pointer">
            <a href="#historical">История о Узбекистане</a>
          </li>
          <li className="hover:text-[#c89b3c] cursor-pointer">
            <a href="#gallery">Контакты</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
