import SubCatItem from "./SubCatItem";
import { useQuery } from "react-query";
import { getSubCategoriesFull, getSubCategoryById } from "../../helpers/requests";

const SubCategories = ({ subCategoriesIds }) => {
  console.log(subCategoriesIds);
  const {
    isLoading: subCategoriesLoading,
    data: subCategories,
  } = useQuery("subCategoriesFull", () => getSubCategoriesFull(subCategoriesIds));

  if (subCategoriesLoading) return null;
  console.log(subCategories);

  return (
    <div className="max-w-sm px-3 mx-auto mb-5 flex justify-between">
      {subCategories.map((item, idx) => {
        return (
          <SubCatItem key={idx} item={item} />
        );
      })}
    </div>
  );
};

export default SubCategories;
