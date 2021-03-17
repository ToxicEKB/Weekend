import React from "react";
import SubCategories from "../components/SubCategories";
import Category from "../components/Category/Category";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  getCategoryById,
  getSubCategoriesFull,
} from "../helpers/requests";

const CategoryPage = () => {
  const { id } = useParams();

  const { data: category } = useQuery(["category", id], () => getCategoryById(id));

  const subCategoriesIds = category?.services?.map((item) => item.SubcategoryId);

  const { data: subCategories } = useQuery("subCategoriesFull", () => getSubCategoriesFull(subCategoriesIds),
    { enabled: !!subCategoriesIds });

  console.log(subCategories);

  return (
    <>
      <SubCategories subCategories={subCategories}/>
      <Category category={category}/>
    </>
  );
};

export default CategoryPage;
