import { baseUrl } from "../constants";

const getData = async (url) => {
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json().then(({ data }) => data).catch((err) => console.log(err)));
};

export const getCategories = () => getData(`${baseUrl}/api/categories`);
export const getCategoryById = (id) => getData(`${baseUrl}/api/categories/${id}`);
export const getSubCategories = () => getData(`${baseUrl}/api/subcategories`);
export const getSubCategoryById = (id) => getData(`${baseUrl}/api/subcategories/${id}`);
export const getSubCategoriesFull = (arrIds) => {
  return Promise.all(arrIds.map(async (itemId) => {
    return await getSubCategoryById(itemId);
  }));
};
export const getServices = () => getData(`${baseUrl}/api/services`);
