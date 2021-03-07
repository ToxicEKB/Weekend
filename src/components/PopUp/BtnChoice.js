import { useState } from "react";

const BtnChoice = ({ name, updateData }) => {
  const visibilityCity = true;
  const [city, setCity] = useState("Москва");

  return (
    <button
      className={`p-2 min-w-14 border border-Sea rounded-10px bg-transparent cursor-pointer hover:border-Orange focus:outline-none
        ${
          name === "Да"
            ? "text-white bg-Sea hover:bg-Orange hover:shadow-drop"
            : ""
        } `}
      onClick={() => {
        updateData(!visibilityCity);
        name === "Да" ? console.log(city) : console.log("-->");
      }}
    >
      {name}
    </button>
  );
};

export default BtnChoice;
