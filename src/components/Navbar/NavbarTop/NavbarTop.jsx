import { Button, Card, Dropdown, Tooltip } from "flowbite-react";
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
        <div className="md:space-x-8 flex font-semibold flex-col md:flex-row space-y-2 md:space-y-0">
          <Link
            to="/saved-recipes"
            className="flex items-center hover:text-slate-800"
          >
            <span className="text-orange-500 mr-3">
              <FaRegFileAlt />
            </span>
            Favorite Recipes
          </Link>
          <p className="flex items-center hover:text-slate-800">
            <span className="text-orange-500 mr-3">
              <FaRegHeart />
            </span>
            Saved Recipe
          </p>
          {users && users ? (
            <span className="space-x-2 flex items-center">
              <Dropdown
                inline={true}
                label={
                  <Tooltip content={users.displayName}>
                    <img
                      src={users.photoURL}
                      className="w-9 h-9 rounded-md cursor-pointer"
                    />
                  </Tooltip>
                }
              >
                <Dropdown.Item className=" hover:bg-transparent">
                  <div className="max-w-sm">
                    <Card>
                      <div className="flex flex-col items-center pb-10">
                        <img
                          className="mb-3 h-24 w-24 rounded-full shadow-lg"
                          src={users.photoURL}
                          alt="user image"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                          {users.displayName}
                        </h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Web Developer
                        </span>
                        <div className="mt-4 flex space-x-3 lg:mt-6">
                          <Button size="sm" gradientDuoTone="purpleToPink">
                            Add friend
                          </Button>
                          <Link to="/contact">
                            <Button
                              size="sm"
                              outline={true}
                              gradientDuoTone="purpleToBlue"
                            >
                              Message
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Dropdown.Item>
              </Dropdown>

              <Tooltip content="LogOut">
                <FaSignOutAlt
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
