import React, { useState, useEffect } from "react";
import "./tailwind.output.css";
import Tags from "./components/Tags";
import PopUp from "./components/PopUp";
import Footer from "./components/footer/Footer.js";


function App() {
  const [visiblePopUp, setvisiblePopUp] = useState(true);

  useEffect(() => {
    setvisiblePopUp(visiblePopUp);
  }, []);

  const togglePopUp = () => {
    setvisiblePopUp(!visiblePopUp);
  };

  return (
    <div className="App">
      {visiblePopUp ? <PopUp updateData={togglePopUp} /> : null}
      <Tags />
      <Footer />
    </div>
  );
}

export default App;
