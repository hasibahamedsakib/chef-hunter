import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLock,
  FaRegFileAlt,
  FaRegHeart,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const NavbarTop = () => {
  return (
    <div className="bg-[#f2f1ee]">
      <div className="text-[#8c8e95] flex items-center justify-between containeR">
        <div className=" space-x-5 flex ">
          <FaFacebookSquare
            title="facebook"
            className="w-5 h-5 hover:text-slate-800"
          />
          <FaTwitter title="Twitter" className="w-5 h-5 hover:text-slate-800" />
          <FaInstagram
            title="Instagram"
            className="w-5 h-5 hover:text-slate-800"
          />
          <FaYoutube title="Youtube" className="w-5 h-5 hover:text-slate-800" />
        </div>

        {/* recipe side */}
        <div className="space-x-8 flex font-semibold">
          <p className="flex items-center hover:text-slate-800">
            <span className="text-orange-500 mr-3">
              <FaRegFileAlt />
            </span>
            Submit Recipe
          </p>
          <p className="flex items-center hover:text-slate-800">
            <span className="text-orange-500 mr-3">
              <FaRegHeart />
            </span>
            Saved Recipe
          </p>
          <p className="flex items-center hover:text-slate-800">
            <span className="text-orange-500 mr-3">
              <FaLock />
            </span>
            Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
