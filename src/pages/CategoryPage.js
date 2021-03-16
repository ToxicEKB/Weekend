import React from "react";
import SubCategories from "../components/SubCategories";
import Category from "../components/Category/Category";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCategoryById, getSubCategories, getSubCategoryById } from "../helpers/requests";

const CategoryPage = () => {
  const { id } = useParams();

  const {
    isLoading: categoryLoading,
    data: category,
  } = useQuery(["category", id], () => getCategoryById(id));

  if (categoryLoading) return null;

  const { name, services } = category;
  const subCategoriesIds = services.map((item) => item.SubcategoryId);

  return (
    <>
      <SubCategories subCategoriesIds={subCategoriesIds}/>
      <Category name={name} services={services}/>
    </>
  );
};

export default CategoryPage;
