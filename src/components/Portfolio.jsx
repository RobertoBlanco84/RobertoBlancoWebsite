import React, { Component } from "react";

import "./../styles/Component.css";
import "./../styles/Portfolio.css";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <section className="topOfComponent">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="componentHeader" id="portfolioId">
                Portfolio
              </h4>
            </div>
            <div className="col-6 col-md-4">
              <img className="portfolioLink" src="/pics/githubS.png" />
            </div>
            <div className="col-6 col-md-4">
              <img className="portfolioLink" src="/pics/githubS.png" />
            </div>
            <div className="col-6 col-md-4">
              <img className="portfolioLink" src="/pics/linkedInS.jpeg" />
            </div>
            <div className="col-6 col-md-4">
              <img className="portfolioLink" src="/pics/githubS.png" />
            </div>
            <div className="col-6 col-md-4">
              <img className="portfolioLink" src="/pics/githubS.png" />
            </div>
            <div className="col-6 col-md-4">
              <img className="portfolioLink" src="/pics/linkedInS.jpeg" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
