import React, { Component } from "react";
import { Sound } from "react-sound";

import "./styles.css";

class Firework extends Component {
  render() {
    return (
      <div>
        <div className="pyro">
          <div className="before" />
          <div className="after" />
        </div>
      </div>
    );
  }
}

export default Firework;
