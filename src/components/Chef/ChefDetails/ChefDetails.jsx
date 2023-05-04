import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React from "react";
import { FaPrint, FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
const ChefDetails = () => {
  const data = useLoaderData();
  const {
    img_url,
    name,
    description,
    cuisine,
    experience_years,
    rating,
    best_recipes,
  } = data;
  console.log(data);
  return (
    <>
      <div className="containeR">
        <div className="mx-auto flex flex-col items-center bg-white shadow-md rounded-lg  md:flex-row md:max-w-6xl hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-auto lg:h-[300px] md:h-auto md:w-48 lg:w-[500px] md:rounded-none md:rounded-l-lg hover:rotate-6 transition-all duration-500 hover:scale-90 hover:bg-[#ffb23f] p-6  rounded-lg "
            src={img_url}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal pr-10">
            <div className="flex justify-between font-semibold mb-6">
              <span className="rounded-xl bg-orange-100 px-3 py-1">Lunch</span>
              <span className=" gap-x-2 flex items-center">
                <FaRegHeart className="text-[#ffb23f] h-5 w-5" /> 105
              </span>
              <span className="flex items-center gap-x-3">
                {<Rating style={{ maxWidth: 120 }} value={rating} readOnly />}
              </span>
              <span className="flex items-center gap-x-3">
                {" "}
                <FaPrint className="text-[#ffb23f] h-5 w-5" /> Print
              </span>
              <span className="flex items-center gap-x-3 ">
                {" "}
                <FaRegShareSquare className="text-[#ffb23f] h-5 w-5" /> Share
              </span>
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              This is {name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <div className="flex gap-x-3 flex-grow ">
              <span className="bg-slate-100 p-3">Profational</span>
              <span className="bg-slate-100 p-3">Cuisine :{cuisine}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefDetails;
