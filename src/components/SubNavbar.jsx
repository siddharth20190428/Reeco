import React from "react";
import { FaAngleRight } from "react-icons/fa";

const SubNavbar = () => {
  return (
    <header className="shadow-lg h-28">
      <div className="max-w-7xl h-full mx-auto text-slate-500 flex flex-col justify-evenly">
        <div className="flex items-center text-lg">
          <span>Orders</span>
          <FaAngleRight />
          <span className="underline">Order 32457ABC</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-slate-800">
            Order 32457ABC
          </span>
          <div>
            <button className="py-2 px-4 border-2 rounded-3xl border-green-800 text-green-800 font-black">
              Back
            </button>
            <button className="py-2 px-4 ml-4 border-2 rounded-3xl bg-green-800 text-white font-bold">
              Approve Order
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SubNavbar;
