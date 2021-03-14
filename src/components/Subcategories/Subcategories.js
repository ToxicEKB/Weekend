import { useState } from "react";
import SubCatItem from "./SubCatItem";
import { subCatItems } from "./subCatItems";

const SubCategories = ({ cat }) => {
  const [filterCat, setFilterCat] = useState(0);

  const toggleFilter = (subCat) => {
    if (filterCat === subCat) return setFilterCat(0);
  }

  return (
    <div>
      <div className="max-w-sm px-3 mx-auto mb-5 flex justify-between">
        {subCatItems.map((item, idx) => {
          return (
            item.cat === cat && (
              <SubCatItem
                key={idx}
                icon={item.icon}
                title={item.title}
                subCat={item.subCat}
                setFilterCat={setFilterCat}
                toggleFilter={toggleFilter}
              />
            )
          );
        })}
      </div>
      <div className="flex justify-center flex-wrap mb-5">
        {filterCat
          ? subCatItems
              .filter((subCatItem) => subCatItem.cat === cat && subCatItem.subCat === filterCat) 
              .map((subCatItem, idx) => {
                return (
                  <p key={idx} className="border p-2 mr-2 mb-2">
                    {subCatItem.title}
                  </p>
                );
              })
          : subCatItems.map((subCatItem, idx) => {
              return (
                <p key={idx} className="border p-2 mr-2 mb-2">
                  {subCatItem.title}
                </p>
              );
            })}
      </div>
    </div>
  );
};

export default SubCategories;
