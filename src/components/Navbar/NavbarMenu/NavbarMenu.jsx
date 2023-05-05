import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const NavbarMenu = () => {
  return (
    <div className="containeR py-3">
      <nav className="flex  items-center justify-center md:space-x-14 font-semibold text-slate-600 hover:text-slate-800 flex-col md:flex-row space-y-3 md:space-y-0">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/latest-recipes"
        >
          Latest Recipes
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/saved-recipes"
        >
          Favorite Recipes
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
        <Link className="">
          <FaSearch />
        </Link>
      </nav>
    </div>
  );
};

export default NavbarMenu;
