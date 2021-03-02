import React from "react";
import home from "./images/home-sweet-home.jpg";
import city from "./images/park.png";
import forest from "./images/forest.png";
import birthDay from "./images/balloons.png";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <div className="w-96 md:w-full xl:w-full mx-auto flex flex-col text-center mb-7">
      <h1 className="text-green-600 w-full text-xl font-bold px-5 mb-7 flex-shrink-0">Выберите
        категорию</h1>
      <div className="flex flex-wrap justify-center">
        <CategoryItem img={home} name="Дома с детьми" />
        <CategoryItem img={city} name="В городе с детьми" />
        <CategoryItem img={forest} name="На природе с детьми" />
        <CategoryItem img={birthDay} name="День рождения ребенка" />
      </div>
    </div>
  );
};

export default Category;
