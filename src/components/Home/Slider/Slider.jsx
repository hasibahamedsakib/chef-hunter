import { Button, Rating } from "flowbite-react";
import React from "react";

const Slider = ({ data }) => {
  const { title, image, desc } = data;
  return (
    <div
      className="object-cover h-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${image})`,
      }}
    >
      <div className="text-white  grid items-center justify-center pt-24 lg:pt-48 text-center space-y-4">
        <Rating size="md" className="mx-auto">
          <Rating.Star className="text-slate-100" />
          <Rating.Star className="text-slate-100" />
          <Rating.Star className="text-slate-100" />
          <Rating.Star className="text-slate-100" />
          <Rating.Star className="text-slate-100" />
        </Rating>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-xl ">{desc}</p>
        <Button
          className="w-40 mx-auto"
          outline={true}
          gradientDuoTone="pinkToOrange"
        >
          See More
        </Button>
      </div>
    </div>
  );
};

export default Slider;
