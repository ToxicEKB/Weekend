import SubCatItem from "./SubCatItem";
import { subCatItems } from "./subCatItems";

const SubCategories = ({ cat }) => {
  return (
    <div className="px-3 mb-5 max-w-sm mx-auto flex justify-between">
      {subCatItems.map((item, idx) => {
        return (
          item.cat === cat && (
            <SubCatItem icon={item.icon} title={item.title} key={idx} />
          )
        );
      })}
    </div>
  );
};

export default SubCategories;
