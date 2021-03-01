import "./tailwind.output.css";
import Tags from './components/Tags/Tags';
import PopUp from './components/PopUp';
import Footer from './components/footer/Footer.js';
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <About />
      <Tags />
      <PopUp />
      <Footer />
    </div>
  );
}

export default App;
