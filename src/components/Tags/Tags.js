import TagBlock from "./TagBlock";
import RectLeft from "./icons/RectLeft";
import RectRight from "./icons/RectRight";

const Tags = () => {
  return (
    <div className="p-2.5 w-96 mx-auto">
      <div className="mb-7 flex justify-center items-center">
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
