import React from "react";
import { HiShoppingCart, HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="bg-green-800 p-4">
      <div className="max-w-7xl text-white font-extralight mx-auto flex justify-between items-center">
        <div className="flex text-2xl">
          <h1 className="text-4xl mr-12 font-bold cursor-pointer">Reeco</h1>
          <ul className="flex items-end gap-8">
            <li className="cursor-pointer">Store</li>
            <li className="cursor-pointer">Orders</li>
            <li className="cursor-pointer">Analytics</li>
          </ul>
        </div>
        <div className="flex">
          <span className="inline-block relative mr-6">
            <HiShoppingCart className="w-8 h-8" />
            <span className="absolute -top-2 -right-2 h-5 w-5 text-xs rounded-full flex justify-center items-center bg-green-400">
              12
            </span>
          </span>
          <span className="cursor-pointer flex items-center">
            Hello, James <HiChevronDown className="ml-4" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
