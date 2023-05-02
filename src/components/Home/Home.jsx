import { Carousel } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Slider from "./Slider/Slider";

const Home = () => {
  const sliderData = useLoaderData();

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 py-5">
      <Carousel className="h-[500px]">
        {sliderData.map((sd) => (
          <Slider key={sd.id} data={sd} />
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
