import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const data = useLoaderData();
  const { img_url } = data;
  console.log(data);
  return (
    <div className={`containeR bg-[url(${img_url})]`}>
      <h1 className="text-4xl">{data.name}</h1>
    </div>
  );
};

export default ChefDetails;
