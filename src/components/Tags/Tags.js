import TagBlock from "./TagBlock";
import RectLeft from "../../images/icons/RectLeft";
import RectRight from "../../images/icons/RectRight";

const Tags = () => {
  return (
    <div className="px-3 w-95 mx-auto md:w-2/3 xl:w-1/2">
      <div className="mb-6 flex justify-center items-center">
        <RectLeft />
        <h2 className="mx-10 text-Gray text-xl font-semibold tracking-wide">
          Готовые сеты
        </h2>
        <RectRight />
      </div>
      <TagBlock title="Лучшие подборки" cat={1} />
      <TagBlock title="Развитие навыков" cat={2} />
      <TagBlock title="Локация" cat={3} />
    </div>
  );
};

export default Tags;
