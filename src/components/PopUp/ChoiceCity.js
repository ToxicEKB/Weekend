import { useState } from "react";

const ChoiceCity = (props) => {
  const [city, setCity] = useState(props.city);

  return (
    <div>
      <input
        className="p-2 mb-2.5 w-56 border border-Sea rounded-lg focus:outline-none"
        type="text"
        placeholder="Ваш город"
      />
      <ul className="">
        <li className="list-none mt-1.5 hover:text-Sea">
          <a href="#" className="block no-underline"
          onClick={() => {
            setCity("Москва")
            console.log(city);
          }}>
            Москва
          </a>
        </li>
        <li className="list-none mt-1.5 hover:text-Sea">
          <a href="#" className="block no-underline"
          onClick={() => {
            setCity("Екатеринбург")
            console.log(city);
          }}>
            Екатеринбург
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ChoiceCity;
