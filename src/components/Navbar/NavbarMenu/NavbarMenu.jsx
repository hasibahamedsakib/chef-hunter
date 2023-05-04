import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const NavbarMenu = () => {
  return (
    <div className="containeR py-3">
      <nav className="flex  items-center justify-center space-x-14 font-semibold text-slate-600 hover:text-slate-800 ">
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
          to="/submit-recipes"
        >
          Submit Recipes
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/pages"
        >
          Pages
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
