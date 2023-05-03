import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0 , 0, 0.6), rgba(0, 0, 0, 0.6)),url('404.png')`,
      }}
      className="bg-cover bg-no-repeat bg-center w-full h-screen grid justify-center items-center"
    >
      <div className="text-center">
        <h2 className="text-8xl text-red-500 font-mono font-bold">404</h2>
        <p className="text-4xl text-zinc-50 font-bold mb-5">Page Not Found</p>
        <Link className="text-2xl text-lime-300 font-bold  underline" to="/">
          Go To Home Page
        </Link>
      </div>
    </div>
  );
};

export default Error;
