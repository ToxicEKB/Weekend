import { baseUrl } from "../../constants";

const SubCatItem = ({ item }) => {
  const { image, name, isActive } = item;

  return isActive ? (
    <div className="group flex flex-col items-center cursor-pointer">
      <div
        className="h-14 w-14 flex items-center justify-center rounded-full bg-lightGray border border-transparent group-hover:border-Orange">
        <img src={`${baseUrl}/images/${image}`} className="mb-2.5 rounded-xl"
             style={{ width: 55, height: 55 }}/>
      </div>
      <p className="max-w-25 text-center text-Gray text-xs font-semibold">
        {name}
      </p>
    </div>
  ) : null;
};

export default SubCatItem;
