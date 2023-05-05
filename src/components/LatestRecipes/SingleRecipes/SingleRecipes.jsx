// import { Card } from "flowbite-react";
import React from "react";
import { FaRegClock, FaRegFolderOpen } from "react-icons/fa";

const SingleRecipes = ({ recipe }) => {
  const { title, desc, image, type, time } = recipe;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md mb-10">
      <img
        className="rounded-t-lg"
        src={image}
        alt="cover image"
        loading="lazy"
        width={390}
        height={500}
      />

      <div className="p-6">
        <h5 className="text-2xl font-bold tracking-tight text-slate-600 dark:text-white  hover:text-orange-500 duration-300">
          {title}
        </h5>
        <p className="font-normal text-gray-700  dark:text-gray-400 py-4">
          {desc}
        </p>
        <div className="  flex items-center justify-around py-3 font-semibold  text-slate-600 mt-2">
          <div className=" hover:text-orange-500 p-2  flex items-center gap-2">
            <FaRegFolderOpen />
            <p>{type}</p>
          </div>
          <div className=" hover:text-orange-500  p-2 flex items-center gap-2">
            <FaRegClock />
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipes;
