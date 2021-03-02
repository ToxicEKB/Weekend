import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './components/footer/Footer';
import "./tailwind.output.css";
import {Collaboration} from './components/collaboration/Collaboration';

function App() {
  // const routes = useRoutes();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*example usage Tailwind below*/}
        <p className="border-solid border-4 border-gray-600">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
      <Collaboration />
    </div>
  );
}

export default App;
