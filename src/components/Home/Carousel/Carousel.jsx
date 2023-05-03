import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";

const CarouselCompo = () => {
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/home-slider/")
      .then((res) => res.json())
      .then((data) => setSliderData(data));
  }, []);
  return (
    <div className="h-[600px] w-full  pt-5">
      <Carousel className="">
        {sliderData.map((sd) => (
          <Slider key={sd.id} data={sd} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCompo;
