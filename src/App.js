import React, { Component } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ReallySmoothScroll from "really-smooth-scroll";

ReallySmoothScroll.shim();

class App extends Component {
  componentDidMount() {
    window.scrollTo(1, 1);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>
        <div>
          <Welcome />
        </div>
        <div>
          <AboutMe />
        </div>
        <div>
          <Portfolio />
        </div>
      </div>
    );
  }
}
export default App;
