import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const data = useLoaderData();
  const { img_url } = data;
  console.log(data);
  return (
    <>
      <div
        className={`w-full h-[300px] bg-cover bg-center `}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${img_url})`,
        }}
      >
        <h1 className="text-6xl text-center text-white">{data.name}</h1>
      </div>
      <div>
        <h1>hello</h1>
      </div>
    </>
  );
};

export default ChefDetails;
