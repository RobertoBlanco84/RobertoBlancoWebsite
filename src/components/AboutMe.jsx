import React, { Component } from "react";

import "./../styles/Component.css";
import "./../styles/AboutMe.css";

class AboutMe extends Component {
  state = {};

  render() {
    return (
      <article className="topOfComponent">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="componentHeader" id="aboutMeId">
                About me
              </h4>
              <p>
                I am Systemdeveloper(Java) from Stockholm that likes front end
                development, preferably in ReactJS. When Im not developing Im
                usually skateboarding or punching/get punched by people in the
                face(boxing). This website is intended for giving you a picture
                of who I am and my skill set. If you feel the urge to contact me
                dont hesitate, just do it! Give me a ring or send me an email.
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default AboutMe;
