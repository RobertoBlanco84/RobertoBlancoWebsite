import React, { Component } from "react";

class NavBar extends Component {
  //state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#aboutMeId">
          <p> About Me</p>
        </a>
        <a className="navbar-brand" href="#">
          <p> Portfolio</p>
        </a>
      </nav>
    );
  }
}

export default NavBar;
