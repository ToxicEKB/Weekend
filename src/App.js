import React, { useState, useEffect } from "react";
import "./tailwind.output.css";
import Tags from './components/Tags/Tags';
import PopUp from './components/PopUp';
import Footer from './components/footer/Footer.js';
import About from "./components/About";
import Category from "./components/Category";

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
      <About />
      <Category />
      <Tags />
      <Footer />
    </div>
  );
}

export default App;
