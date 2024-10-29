import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "../logo.jpeg"; // Ensure the logo path is correct

const Navbar = () => {
  return (
    <div className="flex justify-between items-center   bg-green-800 p-4">
      <div>
        <img src="" alt="logo" className="w-28 h-auto" />
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold underline transition duration-300"
                  : "text-white transition duration-300 hover:underline hover:text-gray-200"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold underline transition duration-300"
                  : "text-white transition duration-300 hover:underline hover:text-gray-200"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fertilizers"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold underline transition duration-300"
                  : "text-white transition duration-300 hover:underline hover:text-gray-200"
              }
            >
              Fertilizers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tools"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold underline transition duration-300"
                  : "text-white transition duration-300 hover:underline hover:text-gray-200"
              }
            >
              Tools & Equipment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold underline transition duration-300"
                  : "text-white transition duration-300 hover:underline hover:text-gray-200"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
