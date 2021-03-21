import React from "react";
import SubCategories from "../components/SubCategories";
import Category from "../components/Category/Category";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import { getCategoryById, getSubCategoriesFull } from "../helpers/requests";

const CategoryPage = () => {
  const { id } = useParams();

  const { data: category } = useQuery(["category", id], () => getCategoryById(id));

  const subCategoriesIds = category?.services?.map((item) => item.SubcategoryId);

  const { data: subCategories } = useQuery("subCategoriesFull", () => getSubCategoriesFull(subCategoriesIds),
    { enabled: !!subCategoriesIds });

  console.log(subCategories);

  const [filterCat, setFilterCat] = useState(0);
  const toggleFilter = (SubcategoryId) => {
    if (filterCat === SubcategoryId) return setFilterCat(0);
  }

  return (
    <>
      <SubCategories subCategories={subCategories} setFilterCat={setFilterCat} toggleFilter={toggleFilter}/>
      <Category category={category} filterCat={filterCat}/>
    </>
  );
};

export default CategoryPage;
