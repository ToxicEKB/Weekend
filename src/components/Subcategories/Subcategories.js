import SubCatItem from "./SubCatItem";
import { subCatItems } from "./subCatItems";

const Subcategories = () => {
  return (
    <div className="px-3 max-w-sm mx-auto flex justify-between">
      {subCatItems.map(({ icon, title }, idx) => {
        return <SubCatItem icon={icon} title={title} key={idx} />;
      })}
    </div>
  );
};

export default Subcategories;
