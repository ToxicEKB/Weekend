import React from "react";
import { baseUrl } from "../../constants";

const CategoryItem = ({ img, name, onClick }) => {
  return (
    <div className="flex flex-col w-40 mb-7 mr-4 cursor-pointer" onClick={onClick}>
      <img src={`${baseUrl}/images/${img}`} className="mb-2.5 rounded-xl" style={{ width: 160, height: 160 }}/>
      <h2 className="text-white w-full text-xs md:text-base mb-7 font-medium">{name}</h2>
    </div>
  );
};

export default CategoryItem;
