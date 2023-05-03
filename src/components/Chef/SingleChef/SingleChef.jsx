import { Button, Card, Rating } from "flowbite-react";
import React from "react";
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
      <Card imgAlt="this is image" imgSrc={img_url}>
        <h5 className="text-2xl font-bold tracking-tight text-slate-600 dark:text-white">
          {name}
        </h5>
        <div className="flex gap-3 items-center justify-between">
          <Rating size="md">
            <Rating.Star className="text-slate-800" />
            <Rating.Star className="text-slate-800" />
            <Rating.Star className="text-slate-800" />
            <Rating.Star className="text-slate-800" />
            <Rating.Star filled={false} />
          </Rating>
          <span className="text-slate-700 gap-x-2 flex font-bold items-center">
            <FaHeart className="h-5 w-5" /> 105
          </span>
        </div>
        <div className="  border-y-2 flex font-semibold text-xl text-slate-600 mt-2">
          <div className=" border-r-2 p-2 grow">
            <p>Experience {experience_years} Years</p>
          </div>
          <div className=" grow p-2">
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
