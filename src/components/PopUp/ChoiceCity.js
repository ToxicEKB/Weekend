const ChoiceCity = () => {
  return (
    <div>
      <input
        className="p-2 mb-2.5 w-52 border border-Sea rounded-lg focus:outline-none"
        type="text"
        placeholder="Ваш город"
      />
      <ul className="">
        <li className="list-none mt-1.5 hover:bg-gray-100">
          <a href="#" className="block no-underline">
            Москва
          </a>
        </li>
        <li className="list-none mt-1.5 hover:bg-gray-100">
          <a href="#" className="block no-underline">
            Екатеринбург
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ChoiceCity;
