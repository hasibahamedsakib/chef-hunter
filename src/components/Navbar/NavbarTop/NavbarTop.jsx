import { Tooltip } from "flowbite-react";
import React, { useContext } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLock,
  FaRegFileAlt,
  FaRegHeart,
  FaSignOutAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
const NavbarTop = () => {
  const { users, logoutUser } = useContext(AuthContext);
  return (
    <div className="bg-[#f2f1ee]">
      <div className="text-[#8c8e95] flex items-center justify-center md:justify-between containeR flex-col md:flex-row space-y-2 md:space-y-0">
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
        <div className="md:space-x-8 flex font-semibold flex-col md:flex-row space-y-2 ms:space-y-0">
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
          {users && users ? (
            <span className="space-x-2 flex items-center">
              <Tooltip content={users.displayName}>
                <img
                  src={users.photoURL}
                  className="w-9 h-9 rounded-md cursor-pointer"
                />
              </Tooltip>
              <Tooltip content="LogOut">
                <FaSignOutAlt
                  title="Log Out"
                  onClick={() => logoutUser()}
                  className="w-8 h-8 hover:text-orange-500 cursor-pointer"
                />
              </Tooltip>
            </span>
          ) : (
            <Link
              to="/login"
              className="flex items-center hover:text-slate-800 border rounded border-orange-400 px-5 py-2 "
            >
              <span className="text-orange-500 mr-3">
                <FaLock />
              </span>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
