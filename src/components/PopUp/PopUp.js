import IconClose from "./icons/IconClose";
import IconMap from "./icons/IconMap";
import ChoiceCity from "./ChoiceCity";
import useVisibilityToggler from "./useVisibilityToggler";

const PopUp = ({ setActive, setCity }) => {
  const [ChoiseCityComponent, toggleVisibilityCity] = useVisibilityToggler(
    <ChoiceCity
      setActive={setActive}
      setCity={setCity}
    />,
    false
  );

  return (
    <div className="z-100 px-9 py-8 relative bg-white rounded-2xl">
      <button
        className="p-1 absolute top-2 right-2 text-gray-400 border-none bg-transparent cursor-pointer hover:opacity-70 focus:outline-none"
        onClick={() => setActive(false)}
      >
        <IconClose />
      </button>
      <div className="flex items-center">
        <IconMap />
        <p className="mb-5 mt-1 text-lg font-semibold text-center">
          Ваш город Москва?
        </p>
      </div>
      {!ChoiseCityComponent ? (
        <div className="flex justify-between">
          <button
            className={
              "p-2 min-w-14 rounded-10px text-white bg-Sea cursor-pointer hover:bg-Orange hover:shadow-drop focus:outline-none"
            }
            onClick={() => {
              setActive(false);
              setCity("Москва");
            }}
          >
            Да
          </button>
          <button
            className={
              "p-2 border border-Sea rounded-10px bg-transparent cursor-pointer hover:border-Orange focus:outline-none"
            }
            onClick={() => {
              toggleVisibilityCity();
            }}
          >
            Выбор города
          </button>
        </div>
      ) : null}
      {ChoiseCityComponent}
    </div>
  );
};

export default PopUp;
