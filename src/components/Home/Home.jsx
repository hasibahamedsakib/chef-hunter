import React from "react";
import Chef from "../Chef/Chef";
import RecipeCatagories from "../RecipeCatagories/RecipeCatagories";
import CarouselCompo from "./Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <CarouselCompo />
      <Chef />
      <RecipeCatagories />
    </div>
  );
};

export default Home;
