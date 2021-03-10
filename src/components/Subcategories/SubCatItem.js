const SubCatItem = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-14 w-14 flex items-center justify-center rounded-full bg-lightGray">
        {icon}
      </div>
      <p className="max-w-25 text-center text-Gray text-xs font-semibold">
        {title}
      </p>
    </div>
  );
};

export default SubCatItem;
