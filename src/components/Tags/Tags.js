import TagBlock from "./TagBlock";

const Tags = () => {
  return (
    <div className="p-2.5 w-96 mx-auto">
      <h2 className="mb-7 text-green-600 text-xl font-bold text-center">
        Воспользуйтесь уже готовыми подборками
      </h2>
      <TagBlock title="Лучшие подборки" cat={1} />
      <TagBlock title="Развитие навыков" cat={2} />
      <TagBlock title="Местоположение" cat={3} />
    </div>
  );
};

export default Tags;
