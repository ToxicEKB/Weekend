import SubCatItem from "./SubCatItem";

const SubCategories = ({ subCategories, setFilterCat, toggleFilter }) => {

  return (
    <div className="px-3 mb-5 max-w-sm mx-auto flex justify-between">
      {subCategories?.map((item, idx) => {
          return (
            // item.desc === subCategories.desc && (
              <SubCatItem
                key={idx}
                item={item}
                setFilterCat={setFilterCat}
                toggleFilter={toggleFilter}
              />
            // )
          );
        })}
    </div>
  );
};

export default SubCategories;
