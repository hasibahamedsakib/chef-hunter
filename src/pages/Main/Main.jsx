import React from "react";
import { Outlet } from "react-router-dom";
// import FooterCompo from "../../components/Footer/Footer";
import NavbarCompo from "../../components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <NavbarCompo />
      <div className="details ">
        <Outlet />
      </div>
      {/* <FooterCompo /> */}
    </div>
  );
};

export default Main;
