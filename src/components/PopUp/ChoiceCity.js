const ChoiceCity = () => {
  return (
    <div>
      <input
        className="p-2 mb-2.5 w-52 border border-green-500 rounded-lg focus:outline-none"
        type="text"
        placeholder="Ваш город"
      />
      <ul className="">
        <li className="list-none mt-1.5">
          <a href="#" className="no-underline hover:underline">
            Москва
          </a>
        </li>
        <li className="list-none mt-1.5">
          <a href="#" className="no-underline hover:underline">
            Екатеринбург
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ChoiceCity;
