import React, { useEffect, useState } from "react";

import { Button } from "flowbite-react";
import SingleRecipes from "./SingleRecipes/SingleRecipes";

const LatestRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div
      className="py-20"
      style={{
        backgroundImage: `url('https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/pattern-home.jpg')`,
      }}
    >
      <div className="text-center">
        <p className="text-xl font-mono text-orange-500 text-center  font-bold py-3">
          Recent Recipes
        </p>
        <h1 className="text-5xl font-bold text-slate-800 mb-16">
          Latest Recipes section
        </h1>
      </div>
      <div className="containeR grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <SingleRecipes recipe={recipe} key={recipe.id} />
        ))}
      </div>
      <div className="mx-auto w-52">
        <Button gradientMonochrome="failure" size="lg">
          View All Recipes
        </Button>
      </div>
    </div>
  );
};

export default LatestRecipes;
