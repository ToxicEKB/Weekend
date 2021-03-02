import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import BtnChoice from "./BtnChoice";
import ChoiceCity from "./ChoiceCity";
import useVisibilityToggler from "./useVisibilityToggler";

const PopUp = (props) => {
  const [ChoiseCityComponent, toggleVisibilityCity] = useVisibilityToggler(
    <ChoiceCity />,
    false
  );

  return (
    <>
      <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="px-4 py-5 w-60 relative bg-white rounded-2xl">
          <button
            className="p-1 absolute -top-2 right-1 text-green-600 text-2xl border-none bg-transparent cursor-pointer hover:opacity-70 focus:outline-none"
            onClick={props.updateData}
          >
            &times;
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
              <BtnChoice name="Да" updateData={props.updateData} />
              <BtnChoice
                name="Выбор города"
                updateData={toggleVisibilityCity}
              />
            </div>
          ) : null}
          {ChoiseCityComponent}
        </div>
      </div>
    </>
  );
};

export default PopUp;
