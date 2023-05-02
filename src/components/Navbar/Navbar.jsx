import React from "react";
import NavLogo from "./NavLogo/NavLogo";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarTop from "./NavbarTop/NavbarTop";
const NavbarCompo = () => {
  return (
    <div>
      <NavbarTop />
      <NavLogo />
      <hr />
      <NavbarMenu />
    </div>
  );
};

export default NavbarCompo;
