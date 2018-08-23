import React, { Component } from "react";
import "./../styles/AboutMe.css";

class AboutMe extends Component {
  state = {};

  render() {
    return (
      <article className="topOfComponent">
        <div className="container">
          <div className="row">
            <h4 className="h4Test" id="aboutMeId">
              About me
            </h4>
            <p>
              Systemdeveloper(Java), that likes to play around in ReactJS. When
              Im not developing Im usually skateboarding or punching people in
              the face(boxing).
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default AboutMe;
