import React, { useEffect, useState } from "react";
import SingleCatagories from "./SingleCategories/SingleCatagories";

const RecipeCatagories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://chef-hunter-server-rho.vercel.app/catagories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="containeR my-20">
      <div className="text-center">
        <p className="text-xl font-mono font-bold text-orange-500 py-3">
          Choose a Category
        </p>
        <h1 className="text-5xl font-bold text-slate-800">Recipe Categories</h1>
      </div>
      <div className="my-8 flex items-center justify-between px-4 ">
        {categories.map((catagories) => (
          <SingleCatagories catagories={catagories} key={catagories.id} />
        ))}
      </div>
    </div>
  );
};

export default RecipeCatagories;
