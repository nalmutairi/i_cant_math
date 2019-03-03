import React, { Component } from "react";
import { Sound } from "react-sound";
import FireworkSound from "./sound";

import "./styles.css";

class Firework extends Component {
  render() {
    return (
      <div className="pyro">
        <div className="before" />
        <div className="after" />
        <FireworkSound />
      </div>
    );
  }
}

export default Firework;
