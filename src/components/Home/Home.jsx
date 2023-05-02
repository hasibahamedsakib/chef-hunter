import { Carousel } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Slider from "./Slider/Slider";

const Home = () => {
  const sliderData = useLoaderData();

  return (
    <div className="h-[500px]  py-5">
      <Carousel className="">
        {sliderData.map((sd) => (
          <Slider key={sd.id} data={sd} />
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
