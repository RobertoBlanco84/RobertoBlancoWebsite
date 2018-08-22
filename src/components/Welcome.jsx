import React, { Component } from "react";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Hello and welcome, my name is Roberto!</h1>
        <section>
          <a href="https://github.com/RobertoBlanco84">
            {" "}
            <img src="/pics/githubS.png" alt="Github Logo" />
          </a>
          <a href="https://www.linkedin.com/in/roberto-blanco-b1aa21126/">
            {" "}
            <img src="/pics/linkedIns.jpeg" alt="LinkedIn Logo" />
          </a>
        </section>
      </div>
    );
  }
}

export default Welcome;
