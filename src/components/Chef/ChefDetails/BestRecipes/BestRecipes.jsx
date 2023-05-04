import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button, Card, Tooltip } from "flowbite-react";
import React, { useState } from "react";
import { FaCheckCircle, FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
const BestRecipes = ({ bestRecipe }) => {
  const [disable, setDisable] = useState(false);
  //   console.log(bestRecipe);
  const { cooking_method, ingredients, name, rating } = bestRecipe;

  const handleTost = () => {
    setDisable(true);
    Swal.fire(
      "Favorite !!!",
      "This Recipe is add on your favorite list",
      "success"
    );
  };

  return (
    <Card className="mb-10 mx-5">
      <div className=" border-b-2 py-6 flex items-center justify-between">
        <h5 className="text-xl font-bold tracking-tight text-gray-700 dark:text-white">
          Recipe <span className="text-orange-500">{name}</span>
        </h5>
        <div className="flex gap-x-4 items-center">
          {<Rating style={{ maxWidth: 120 }} value={rating} readOnly />}
          <Tooltip content="Add To Favorite">
            <Button
              onClick={handleTost}
              disabled={disable}
              className="flex"
              pill={true}
              gradientMonochrome="pink"
            >
              {" "}
              <FaRegHeart className="text-white h-6 w-6  " />
            </Button>
          </Tooltip>
        </div>
      </div>
      <h5 className="text-xl font-bold tracking-tight text-gray-700 dark:text-white">
        Cooking <span className="text-orange-500">Method</span>
      </h5>
      <p className="font-normal text-slate-700 dark:text-gray-400 font-sans border-b-2 pb-6">
        {cooking_method}
      </p>

      <ul role="list" className="my-1 space-y-5">
        <h5 className="text-2xl font-semibold tracking-tight text-gray-700 dark:text-white">
          Main <span className="text-orange-500">Ingredients</span>
        </h5>

        {ingredients.map((ing) => (
          <>
            <li className="flex space-x-3 items-center font-sans">
              <FaCheckCircle className="" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {ing}
              </span>
            </li>
          </>
        ))}
      </ul>
    </Card>
  );
};

export default BestRecipes;
