import PopUp from "../PopUp";
import "./modal.css";

const Modal = ({ active, setActive, setCity }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <PopUp
          setActive={setActive}
          setCity={setCity}
        />
      </div>
    </div>
  );
};

export default Modal;
