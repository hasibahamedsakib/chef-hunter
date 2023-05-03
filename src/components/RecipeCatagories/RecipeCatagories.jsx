import React, { useEffect, useState } from "react";
import SingleRecipe from "./SingleRecipe/SingleRecipe";

const RecipeCatagories = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/catagories")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="containeR my-20">
      <div className="text-center">
        <p className="text-orange-500 font-mono text-2xl ">Choose a Category</p>
        <h1 className="text-5xl font-bold text-slate-800">Recipe Categories</h1>
      </div>
      <div className="my-8 flex items-center justify-between px-4">
        {recipes.map((recipe) => (
          <SingleRecipe recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};

export default RecipeCatagories;
