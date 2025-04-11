import React, { useEffect, useState } from "react";
import { navItems } from "../constant/Constant.jsx";
import { Menu, X } from "lucide-react";
import "../index.css";
import BgLogo from "../assets/bg.svg";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggler = () => {
    setMenuOpen(!menuOpen);
  };
  //implementation of useEffect hook for
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    // Cleanup function for unmount phase
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 z-40 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="relative container m-auto">
        <div className="m-auto flex h-16 justify-between mb-4">
          {/* Logo Section */}
          <div className="flex flex-shrink-0 items-center ml-[18px]">
            <img
              className="h-24 w-24 mt-6 cursor-pointer scale-120"
              src={BgLogo}
              alt="logo"
            />

            <span className="text-white font-[Sour_Gummy] text-2xl tracking-widest">
              PortFolio
            </span>
          </div>

          {/* NavElements for Desktop */}
          <NavElements menuOpen={menuOpen} isMobile={false} />

          {/* Toggle Button for Mobile with animation */}
          <div className="md:hidden w-6 h-6 mt-6 mr-4 hover:bg-[#4aa3bc] transition-colors duration-100 rounded-lg">
            <motion.button
              onClick={menuToggler}
              initial={false}
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              className="text-white md:hidden focus:outline-none cursor-pointer"
            >
              {menuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {/* NavElements for Mobile (conditionally rendered below) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <NavElements menuOpen={menuOpen} isMobile={true} />
            </motion.div>
          )}
        </AnimatePresence>
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
          ? "flex flex-col  items-center space-y-4 p-4 bg-gray-900 h-screen w-screen absolute  top-20 z-50"
          : "hidden md:flex md:justify-center md:items-center ml-14 space-x-12 mr-[160px]"
      }`}
    >
      {navItems.map((item, index) => (
        <li
          className="text-white font-[Sour_Gummy] md:text-[16px] text-2xl md:mt-0 mt-8 hover:text-[#4aa3bc] "
          key={index}
        >
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
