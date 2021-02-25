function Tags() {
  return (
    <div className="p-2.5 w-96 mx-auto">
      <h2 className="mb-7 text-green-600 text-xl font-bold text-center">Воспользуйтесь уже готовыми подборками</h2>
      <p className="mb-5 text-base font-medium">Лучшие подборки</p>
      <div className="flex flex-wrap">
        <a className="px-2 py-1 mr-4 mb-5 rounded-md bg-green-500 no-underline text-base hover:bg-green-400" href="#">#рейтинг_5</a>
        <a className="px-2 py-1 mr-4 mb-5 rounded-md bg-green-500 no-underline text-base hover:bg-green-400"href="#">#дети_3+</a>
        <a className="px-2 py-1 mr-4 mb-5 rounded-md bg-green-500 no-underline text-base hover:bg-green-400"href="#">#дети_12+</a>
        <a className="px-2 py-1 mr-4 mb-5 rounded-md bg-green-500 no-underline text-base hover:bg-green-400"href="#">#антистресс</a>
      </div>
      <p className="mb-5 text-base font-medium">Развитие навыков</p>
      <div className="flex flex-wrap">
        <a className="px-2 py-1 mr-4 mb-5 rounded-md bg-green-500 no-underline text-base hover:bg-green-400" href="#">#коммуникация</a>
        <a className="px-2 py-1 mr-4 mb-5 rounded-md bg-green-500 no-underline text-base hover:bg-green-400" href="#">#концентрация</a>
        <a className="px-2 py-1 mr-4 mb-5 rounded-md bg-green-500 no-underline text-base hover:bg-green-400" href="#">#креативность</a>
        <a className="px-2 py-1 mr-4 mb-5 rounded-md bg-green-500 no-underline text-base hover:bg-green-400" href="#">#физическое_развитие</a>
      </div>
      <p className="mb-5 text-base font-medium">Местоположение</p>
      <div className="flex flex-wrap">
        <a className="px-2 py-1 mr-4 mb-5 rounded-md bg-green-500 no-underline text-base hover:bg-green-400" href="#">#в_помещении</a>
        <a className="px-2 py-1 mr-4 mb-5 rounded-md bg-green-500 no-underline text-base hover:bg-green-400" href="#">#на_улице</a>
      </div>
    </div>
  );
}

export default Tags;
