import React, { Component } from "react";

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
            <div className="col-sm-12 col-md-4">
              <img src="/pics/githubS.png" />
            </div>
            <div className="col-sm-12 col-md-4">
              <img src="/pics/githubS.png" />
            </div>
            <div className="col-sm-12 col-md-4">
              <img src="/pics/linkedInS.jpeg" />
            </div>
            <div className="col-sm-12 col-md-4">
              <img src="/pics/githubS.png" />
            </div>
            <div className="col-sm-12 col-md-4">
              <img src="/pics/githubS.png" />
            </div>
            <div className="col-sm-12 col-md-4">
              <img src="/pics/linkedInS.jpeg" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
