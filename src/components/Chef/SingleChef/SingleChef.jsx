import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button, Card } from "flowbite-react";
import React, { lazy } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const SingleChef = ({ chef }) => {
  const {
    id,
    name,
    description,
    img_url,
    experience_years,
    rating,
    best_recipes,
  } = chef;

  return (
    <div className="max-w-sm pb-6">
      <Card imgSrc={img_url} onLoad={lazy} imgAlt="this is chef image">
        <h5 className="text-2xl font-bold tracking-tight text-slate-600 dark:text-white  hover:text-orange-500 duration-300">
          {name}
        </h5>
        <div className="flex gap-3 items-center justify-between">
          {
            <Rating
              style={{ maxWidth: 140, color: "gray" }}
              value={rating}
              readOnly
            />
          }
          <span className="text-slate-500 gap-x-2 flex font-bold items-center">
            <FaHeart className="h-5 w-5" /> 105
          </span>
        </div>
        <div className="  border-y-2 flex font-semibold  text-slate-600 mt-2">
          <div className=" border-r-2 py-3 px-2 grow hover:text-orange-500 duration-300">
            <p>Experience {experience_years} Years</p>
          </div>
          <div className=" grow py-3 px-2  hover:text-orange-500 duration-300">
            <p>Recipes {best_recipes.length}</p>
          </div>
        </div>
        <Link to={`/chef/${id}`}>
          <Button
            outline={true}
            gradientDuoTone="pinkToOrange"
            className="my-3 w-full"
          >
            View Recipe Details
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default SingleChef;
