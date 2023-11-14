import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-green-800">
      <div className="max-w-7xl p-4 text-white font-extralight mx-auto flex justify-between items-center">
        <div className="flex text-2xl">
          <h1 className="text-4xl mr-12 font-bold cursor-pointer">Reeco</h1>
          <ul className="flex items-end gap-8">
            <li className="cursor-pointer">Store</li>
            <li className="cursor-pointer">Orders</li>
            <li className="cursor-pointer">Analytics</li>
          </ul>
        </div>
        <div>
          <span className="cursor-pointer flex items-center">
            Hello, James <FaAngleDown className="ml-4" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
