import React from "react";
import CategorySectionItem from "./CategorySectionItem";
import RectLeftWhite from "./images/main/RectLeftWhite";
import RectRightWhite from "./images/main/RectRightWhite";
import { useQuery } from "react-query";
import { getCategories } from "../../helpers/requests";

const CategorySection = () => {

  const { isLoading, isError, data: categories, error } = useQuery("categories", getCategories);

  return (
    <div className="w-96 md:w-full xl:w-full mx-auto flex flex-col text-center mb-7">
      <div className="bg-category sm:bg-Sea bg-no-repeat bg-cover bg-center">
        <div className="flex flex-wrap justify-center flex-col p-4">
          <div className="flex justify-center items-center w-72 mb-5 mx-auto mt-4">
            <RectLeftWhite/>
            <h1 className="text-white w-full text-xl font-bold px-5 flex-shrink-0">Варианты
              отдыха</h1>
            <RectRightWhite/>
          </div>
          <div className="flex flex-wrap justify-center">
            {categories?.map((item, idx) => (
              <CategorySectionItem item={item} key={idx}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
