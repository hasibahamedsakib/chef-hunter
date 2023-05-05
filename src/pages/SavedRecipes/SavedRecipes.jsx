import React from "react";

import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { deleteShoppingCart, getShoppingCart } from "../../utils/localStorage";
const SavedRecipes = () => {
  const [recipes, setRecipes] = useState("");

  useEffect(() => {
    const showData = getShoppingCart();
    setRecipes(Object.keys(showData));
  }, []);
  const removeStorage = () => {
    deleteShoppingCart();
    setRecipes("");
  };

  if (recipes.length <= 0) {
    return (
      <h1 className="containeR h-[400px] w-full grid items-center justify-center text-2xl text-orange-500 border border-orange-500 rounded-lg my-2">
        You Not added Any Recipe To Your Favorite
      </h1>
    );
  }

  return (
    <div className="containeR">
      <div className="flex justify-around items-center my-4">
        <h1 className="text-3xl font-semibold font-sans text-slate-600">
          All Favorites Recipes Are Hear..{" "}
        </h1>
        <Button gradientDuoTone="pinkToOrange" onClick={removeStorage}>
          Clear All Favorite
        </Button>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3  gap-3 items-center justify-center text-orange-500  rounded-lg ">
        {recipes.map((rec, indx) => {
          return (
            <div
              key={indx}
              className="border border-orange-500 p-3 text-justify rounded-md py-4 flex items-center justify-between"
            >
              <h1 className="text-xl font-mono text-orange-500 font-bold py-2">
                {rec}
              </h1>
              <Button pill={true} gradientDuoTone="pinkToOrange">
                Remove
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavedRecipes;
