import { Card } from "flowbite-react";
import React from "react";

const SingleChef = ({ chef }) => {
  console.log(chef);
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
    <div className="max-w-sm">
      <Card imgAlt="this is image" imgSrc={img_url}>
        <h5 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </Card>
    </div>
  );
};

export default SingleChef;
