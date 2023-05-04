import { Footer } from "flowbite-react";

import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterCompo = () => {
  return (
    <Footer>
      <div className=" w-full bg-slate-600 text-white">
        <div className="containeR">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <Link to="/">
              <div className=" flex  items-center justify-center py-2">
                <img src="/logo.png" alt="" className="w-20 " />
                <h1 className="text-4xl text-center font-serif font-bold text-orange-500">
                  CHEF<span className="text-white text-2xl">hunter...</span>
                </h1>
              </div>
            </Link>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" className="text-white" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link className="text-white">Chef Hunter</Footer.Link>
                  <Footer.Link className="text-white">
                    Chef base project
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" className="text-white" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link className="text-white">Github</Footer.Link>
                  <Footer.Link className="text-white">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" className="text-white" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link className="text-white">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link className="text-white">
                    Terms & Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              by="Hasib Ahamed"
              className="text-white"
              year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FaFacebookSquare
                title="facebook"
                className="w-5 h-5 hover:text-slate-200"
              />
              <FaTwitter
                title="Twitter"
                className="w-5 h-5 hover:text-slate-200"
              />
              <FaInstagram
                title="Instagram"
                className="w-5 h-5 hover:text-slate-200"
              />
              <FaYoutube
                title="Youtube"
                className="w-5 h-5 hover:text-slate-200"
              />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCompo;
