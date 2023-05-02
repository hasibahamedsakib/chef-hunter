import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const NavbarMenu = () => {
  return (
    <div className="containeR py-3">
      <nav className="flex  items-center justify-center space-x-14 font-semibold text-slate-600 hover:text-slate-800 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="">Browse Recipes</NavLink>
        <NavLink to="">Submit Recipes </NavLink>
        <NavLink to="">Pages</NavLink>
        <NavLink to="">Blog</NavLink>
        <NavLink to="">Contact</NavLink>
        <Link className="">
          <FaSearch />
        </Link>
      </nav>
    </div>
  );
};

export default NavbarMenu;
