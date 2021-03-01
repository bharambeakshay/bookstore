/** @format */

// import Displaybook from "../Displaybook/Displaybook"
import Header from "../Header/Header";
import Displaybook from "../Displaybook/Displaybook";

import React, { Component } from "react";

export default class Dashoard extends Component {
  constructor(props) {
    super(props);
    console.log("from dashboard", this.props);
  }

  render() {
    return (
      <div>
        <Header props={this.props} />

        <Displaybook />
      </div>
    );
  }
}
