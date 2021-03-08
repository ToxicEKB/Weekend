import React, { useState } from "react";
import "./tailwind.output.css";
import Tags from "./components/Tags/Tags";
import Modal from "./components/Modal/Modal";
import Footer from "./components/footer/Footer.js";
import About from "./components/About";
import Category from "./components/Category";

function App() {
  const [modalActive, setModalActive] = useState(true);

  const [city, setCity] = useState("Москва");

  return (
    <div className="App">
      <button
        className="p-2 text-sm bg-Sea rounded-10px focus:outline-none"
        onClick={() => setModalActive(true)}
      >
        Город: {city}
      </button>
      <Modal
        active={modalActive} setActive={setModalActive}
        city={city} setCity={setCity}
      />
      <About />
      <Category />
      <Tags />
      <Footer />
    </div>
  );
}

export default App;
