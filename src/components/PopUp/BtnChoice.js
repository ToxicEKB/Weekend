import { useState } from "react";

const BtnChoice = (props) => {
  const visibilityCity = true;
  const [city, setCity] = useState(props.city);
  return (
    <button
      className={`p-2 min-w-14 border border-Sea rounded-10px bg-transparent cursor-pointer hover:border-Orange focus:outline-none
        ${
          props.name === "Да"
            ? "text-white bg-Sea hover:bg-Orange hover:shadow-drop"
            : ""
        } `}
      onClick={() => {
        props.updateData(visibilityCity);
        props.name === "Да" ? console.log(city) : console.log("-->");
      }}
    >
      {props.name}
    </button>
  );
};

export default BtnChoice;
