import React from "react";

import { Button } from "flowbite-react";
import { getShoppingCart } from "../../utils/localStorage";
const SavedRecipes = () => {
  const showData = getShoppingCart();
  console.log(showData);
  const recipes = Object.keys(showData);
  const removeStorage = () => {};
  if (recipes.length <= 0) {
    return (
      <h1 className="containeR h-[400px] w-full grid items-center justify-center text-2xl text-orange-500 border border-orange-500 rounded-lg my-2">
        You Not added Any Recipe To Your Favorite
      </h1>
    );
  }
  console.log(recipes);
  return (
    <div className="containeR grid grid-cols-1 md:grid-cols-3  gap-3 items-center justify-center text-orange-500  rounded-lg ">
      {recipes.map((rec, indx) => {
        return (
          <div className="border border-orange-500 p-3 text-justify rounded-md py-4 flex items-center justify-between">
            <h1
              key={indx}
              className="text-xl font-mono text-orange-500 font-bold py-2"
            >
              {rec}
            </h1>
            <Button
              pill={true}
              gradientDuoTone="pinkToOrange"
              onClick={removeStorage}
            >
              Remove
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default SavedRecipes;
