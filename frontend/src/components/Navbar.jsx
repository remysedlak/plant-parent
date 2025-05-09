import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <div className="relative mb-16">
      {/* Overlay */}
      {show && (
        <div
          className="fixed inset-0 bg-gray-800 opacity-90 z-10"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full flex flex-row justify-center items-center bg-gray-800 py-4 z-20 shadow-md">
        <img
          src="/src/icons/menu-alt-1-svgrepo-com.svg"
          alt="menu"
          className="h-12 absolute left-4 cursor-pointer"
          onClick={toggleMenu}
        />
        <h1 className="text-3xl text-center text-normal text-white font-bold">
          Plant Parent
        </h1>
        <img
          src="/src/icons/garden-tree-svgrepo-com.svg"
          alt="tree"
          className="h-12 ml-4"
        />
        {/* Logo */}
      <img
        src="/src/icons/user-white.svg"
        alt="user"
        className="h-10 absolute right-4 cursor-pointer hover:bg-gray-600 bg-gray-800 p-1 bg-opacity-40 rounded-full"
        ></img>
      </div>

      

      {/* Dropdown Menu */}

      {show && (
        <div className="absolute top-16 left-0 bg-yellow-50 shadow-md p-4 w-full border space-y-3 rounded-xl z-30">
          <Link
            to="/"
            className="block p-2 border bg-gray-100 rounded-xl"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/plants"
            className="block p-2 border bg-gray-100 rounded-xl"
            onClick={toggleMenu}
          >
            Plants
          </Link>
          <Link
            to="/gallery"
            className="block p-2 border bg-gray-100 rounded-xl"
            onClick={toggleMenu}
          >
            Gallery
          </Link>
          <Link
            to="/analytics"
            className="block p-2 border bg-gray-100 rounded-xl"
            onClick={toggleMenu}
          >
            Analytics
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
