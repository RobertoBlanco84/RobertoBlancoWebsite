import React, { Component } from "react";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <article className="topOfComponent">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 id="aboutMeId">Portfolio</h4>
              <p>
                I am System developer(Java) from Stockholm that likes and leans
                more towards front end development, preferably in ReactJS. When
                Im not developing Im usually skateboarding or punching/get
                punched by people in the face(boxing). This website is intended
                for giving you a picture of who I am and my skill set. If you
                feel the urge to contact me dont hesitate, just do it! Give me a
                ring or send me an email.
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Portfolio;
