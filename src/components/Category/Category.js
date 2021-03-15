import React from "react";
import CategoryItem from "./CategoryItem";
import RectLeftWhite from "./images/main/RectLeftWhite";
import RectRightWhite from "./images/main/RectRightWhite";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../../constants";

const Category = () => {
  const history = useHistory();
  const getCategories = async () => {
    return await fetch(`${baseUrl}/api/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json().then(({ data }) => data).catch((err) => console.log(err)));
  };

  const { isLoading, isError, data, error } = useQuery("categories", getCategories);

  const handleSelectCategory = (item) => {
    history.push("/category");
    console.log(item);
  };

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
            {data?.map((item, idx) => (
              <CategoryItem img={item.image} name={item.name} key={idx}
                            onClick={() => handleSelectCategory(item)}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
