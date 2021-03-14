import React from "react";
import home from "./images/home-sweet-home.jpg";

const CategoryItem = ({ img, name }) => {
  return (
    <div className="flex flex-col w-40 mb-7 mr-4 cursor-pointer">
      <img src={img} className="mb-2.5 rounded-xl" style={{ width: 160, height: 160 }}/>
      <h2 className="text-white w-full text-xs md:text-base mb-7 font-medium">{name}</h2>
    </div>
  );
};

export default CategoryItem;
