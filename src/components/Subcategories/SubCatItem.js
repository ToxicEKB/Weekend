const SubCatItem = ({ icon, title }) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer">
      <div className="h-14 w-14 flex items-center justify-center rounded-full bg-lightGray border border-transparent group-hover:border-Orange">
        {icon}
      </div>
      <p className="max-w-25 text-center text-Gray text-xs font-semibold">
        {title}
      </p>
    </div>
  );
};

export default SubCatItem;
