import React from "react";
import home from "./images/home-sweet-home.jpg";

const CategoryItem = ({ img, name }) => {
  return (
    <div className="w-40 flex flex-col mb-7 mr-5 cursor-pointer">
      <img src={img} alt="Category" className="mb-2.5 rounded-xl" style={{ width: 160, height: 160 }}/>
      <h2 className="text-green-600 w-full text-base mb-7 font-medium">{name}</h2>
    </div>
  );
};

export default CategoryItem;
