import React from "react";
import { navItems } from "../constant/Constant.jsx";

const NavBar = () => {
  return (
    <nav class="sticky top-0 bg-black py-4">
      <div class="relative container m-auto py-2">
        <div class="m-auto flex h-16 justify-between p-2">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="h-24 w-22 cursor-pointer"
              src="https://i.imgur.com/cKjLv5S.png"
              alt="logo"
              srcset=""
            />
            <span class="w-12 text-white">React</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li className="text-white" key={index}>
                <a href={item.href}> {item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
