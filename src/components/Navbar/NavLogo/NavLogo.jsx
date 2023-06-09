import React from "react";

const NavLogo = () => {
  return (
    <div className=" flex  items-center justify-center py-2">
      <img src="/logo.png" alt="" className="w-16 md:w-28 " />
      <h1 className="text-2xl md:text-5xl text-center font-serif font-bold text-orange-500">
        CHEF
        <span className="text-slate-600 text-xl md:text-3xl">hunter...</span>
      </h1>
    </div>
  );
};

export default NavLogo;
