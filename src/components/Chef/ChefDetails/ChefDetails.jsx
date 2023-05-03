import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="containeR">
      <h1 className="text-4xl">{data.name}</h1>
    </div>
  );
};

export default ChefDetails;
