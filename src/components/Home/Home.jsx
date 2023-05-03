import React from "react";
import Chef from "../Chef/Chef";
import LatestRecipes from "../LatestRecipes/LatestRecipes";
import RecipeCatagories from "../RecipeCatagories/RecipeCatagories";
import CarouselCompo from "./Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <CarouselCompo />
      <Chef />
      <RecipeCatagories />
      <LatestRecipes />
    </div>
  );
};

export default Home;
