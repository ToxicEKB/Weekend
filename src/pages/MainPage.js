import React, { useState } from "react";
import Modal from "../components/Modal";
import PopUp from "../components/PopUp";
import About from "../components/About";
import CategorySection from "../components/Category";
import Tags from "../components/Tags";

const MainPage = () => {
  const [modalActive, setModalActive] = useState(false);

  const [city, setCity] = useState("Москва");

  return (
    <div className="App">
      <button
        className="p-1 text-xs focus:outline-none"
        onClick={() => setModalActive(true)}
      >
        Город: {city}
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <PopUp setActive={setModalActive} setCity={setCity} />
      </Modal>
      <About />
      <CategorySection />
      <Tags />
    </div>
  );
};

export default MainPage;
