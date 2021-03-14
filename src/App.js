import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./tailwind.output.css";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import TagsPage from "./pages/TagsPage";
import EventPage from "./pages/EventPage";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/category" component={CategoryPage} />
          <Route path="/tags" component={TagsPage} />
          <Route path="/event" component={EventPage} />
        </Switch>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
