import React, { useState } from "react";
import { navItems } from "../constant/Constant.jsx";
import { Menu, X } from "lucide-react";
import "../index.css";
import BgLogo from "../assets/bg.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-lg border-b border-white/10">
      <div className="relative container m-auto">
        <div className="m-auto flex h-16 justify-between mb-4">
          {/* Logo Section */}
          <div className="flex flex-shrink-0 items-center ml-18">
            <img
              className="h-24 w-24 mt-4 cursor-pointer scale-120"
              src={BgLogo}
              alt="logo"
            />
            <span className="text-white font-[Sour_Gummy] text-2xl tracking-widest">
              PortFolio
            </span>
          </div>

          {/* NavElements for Desktop */}
          <NavElements menuOpen={menuOpen} isMobile={false} />

          {/* Toggle Button for Mobile */}
          <div className="md:hidden w-6 h-6 mt-6 mr-4 cursor-pointer hover:bg-[#4aa3bc] transition-colors duration-100 rounded-lg">
            <button
              onClick={menuToggler}
              className="text-white md:hidden focus:outline-none"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* NavElements for Mobile (conditionally rendered below) */}
        {menuOpen && (
          <div className="md:hidden">
            <NavElements menuOpen={menuOpen} isMobile={true} />
          </div>
        )}
      </div>
    </nav>
  );
};

// NavElements Component (handles both mobile and desktop)
export const NavElements = ({ menuOpen, isMobile }) => {
  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col items-center space-y-4 p-4 bg-gray-900 w-full absolute left-0 top-16 z-50"
          : "hidden md:flex md:justify-center md:items-center ml-14 space-x-12 mr-[160px]"
      }`}
    >
      {navItems.map((item, index) => (
        <li
          className="text-white font-[Sour_Gummy] text-[16px] hover:text-[#4aa3bc]"
          key={index}
        >
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
