import SubCatItem from "./SubCatItem";
import { subCatItems } from "./subCatItems";
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
    <div className="px-3 mb-5 max-w-sm mx-auto flex justify-between">
      {/*{subCategories.map((item, idx) => {*/}
      {/*  return (*/}
      {/*    item.cat === cat && (*/}
      {/*    <SubCatItem icon={item.icon} title={item.title} key={idx}/>*/}
      {/*    )*/}
      {/*  );*/}
      {/*})}*/}
    </div>
  );
};

export default SubCategories;
