import IconClose from "./icons/IconClose";
import IconMap from "./icons/IconMap";
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
      <div className="fixed top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="px-10 py-8 w-72 relative bg-white rounded-2xl">
          <button
            className="p-1 absolute top-2 right-2 text-gray-400 border-none bg-transparent cursor-pointer hover:opacity-70 focus:outline-none"
            onClick={props.updateData}
          >
            <IconClose />
          </button>
          <div className="flex items-center">
            <IconMap />
            <p className="mb-6 text-base font-bold text-center">
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
