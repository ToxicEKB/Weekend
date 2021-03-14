import React, { useState } from "react";
import "./tailwind.output.css";
import Tags from "./components/Tags";
import Modal from "./components/Modal";
import PopUp from "./components/PopUp";
import Footer from "./components/footer/Footer.js";
import About from "./components/About";
import Category from "./components/Category";
import SubCategories from "./components/SubCategories";

function App() {
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
        <PopUp
          setActive={setModalActive}
          setCity={setCity}
        />
      </Modal>
      <SubCategories cat={1} />
      <About />
      <Category />
      <Tags />
      <Footer />
    </div>
  );
}

export default App;
