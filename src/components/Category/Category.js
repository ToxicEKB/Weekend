import React from "react";
import CategoryItem from "./CategoryItem";
import RectLeftWhite from "./images/main/RectLeftWhite";
import RectRightWhite from "./images/main/RectRightWhite";
import { mockCategory } from "./mockCategory";

const Category = () => {
  return (
    <div className="w-96 md:w-full xl:w-full mx-auto flex flex-col text-center mb-7">
      <div className="bg-category rotate-180 transform sm:bg-Sea">
        <div className="flex flex-wrap justify-center flex-col rotate-180 transform p-4">
          <div className="flex justify-center items-center w-72 mb-5 mx-auto">
            <RectLeftWhite/>
            <h1 className="text-white w-full text-xl font-bold px-5 flex-shrink-0">Варианты
              отдыха</h1>
            <RectRightWhite/>
          </div>
          <div className="flex flex-wrap justify-center">
            {mockCategory.map((item, idx) => (
              <CategoryItem img={item.img} name={item.name} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
