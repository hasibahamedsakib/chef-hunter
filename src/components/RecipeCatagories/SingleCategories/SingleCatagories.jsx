import React from "react";

const SingleCatagories = ({ catagories }) => {
  const { title, image } = catagories;
  return (
    <div className="text-center pt-10">
      <img
        src={image}
        alt="recipe-image"
        className="w-44 h-44 grow rounded-full hover:rotate-6 transition-all duration-500 shadow-xl hover:opacity-70 "
      />
      <h2 className="py-4 text-2xl text-slate-800 font-semibold">{title}</h2>
    </div>
  );
};

export default SingleCatagories;
