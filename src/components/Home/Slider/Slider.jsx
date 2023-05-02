import React from "react";

const Slider = ({ data }) => {
  console.log(data);
  const { title, image, desc } = data;
  return (
    <div
      className="object-cover h-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${image})`,
      }}
    >
      <div className="text-white grid items-center justify-center lg:pt-52 text-center space-y-4">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-xl ">{desc}</p>
      </div>
    </div>
  );
};

export default Slider;
