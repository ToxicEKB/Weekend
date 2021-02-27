import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import BtnChoice from "./BtnChoice";
import ChoiceCity from "./ChoiceCity";
import useVisibilityToggler from "./useVisibilityToggler";

const PopUp = () => {
  const [ChoiseCityComponent, toggleVisibilityCity] = useVisibilityToggler(
    <ChoiceCity />,
    false
  );

  return (
    <div className="p-2.5 w-96 mx-auto bg-gray-200">
      <div className="px-4 py-5 w-60 relative bg-white rounded-2xl">
        <button className="p-1 absolute -top-0.5 right-1 border-none bg-transparent cursor-pointer hover:opacity-70 focus:outline-none">
          <FontAwesomeIcon
            icon={faTimes}
            className="font-light text-green-600"
          />
        </button>
        <div>
          <p className="mb-5 text-base font-bold text-center">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="mr-2 text-green-600 text-xl"
            />
            Ваш город Москва?
          </p>
        </div>
        {!ChoiseCityComponent ? (
          <div className="flex justify-between">
            <BtnChoice name="Да" />
            <BtnChoice name="Выбор города" updateData={toggleVisibilityCity} />
          </div>
        ) : null}
        {ChoiseCityComponent}
      </div>
    </div>
  );
};

export default PopUp;
