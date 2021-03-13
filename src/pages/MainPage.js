import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import PopUp from "../components/PopUp";
import About from "../components/About";
import Category from "../components/Category";
import Tags from "../components/Tags";

const MainPage = () => {
  const [modalActive, setModalActive] = useState(false);

  const [city, setCity] = useState("Москва");

  return (
    <div className="App">
      <button
        className="p-2 text-sm bg-Sea rounded-10px focus:outline-none"
        onClick={() => setModalActive(true)}
      >
        Город: {city}
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <PopUp setActive={setModalActive} setCity={setCity} />
      </Modal>
      <About />
      <Link to="/category">
        <Category />
      </Link>
      <Link to="/tags">
        <Tags />
      </Link>
    </div>
  );
};

export default MainPage;
