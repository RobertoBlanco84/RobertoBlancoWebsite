import React, { Component } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <section>
          <Welcome />
        </section>
        <section>
          <AboutMe />
        </section>
      </div>
    );
  }
}
export default App;
