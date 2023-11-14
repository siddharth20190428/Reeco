import React from "react";
import Table from "./Table";
import { HiOutlinePrinter, HiSearch } from "react-icons/hi";

const Container = () => {
  return (
    <div className="max-w-7xl mx-auto border-2 p-8 rounded-lg">
      <div className="flex justify-between">
        <div className="max-w-lg w-full lg:max-w-xs relative">
          <input
            id="search"
            name="search"
            className="block w-full pr-10 pl-3 py-2 border border-gray-300 rounded-3xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search"
            type="search"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <HiSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </div>
        <div className="flex">
          <button className="py-2 px-4 border-2 rounded-3xl border-green-800 text-green-800 font-black">
            Add item
          </button>
          <button className="ml-4 text-green-800 font-bold">
            <HiOutlinePrinter className="w-8 h-8" />
          </button>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Container;
