import React, { Component } from "react";

import FireworkSound from "./sound";

import "./styles.css";

class Firework extends Component {
  render() {
    return (
      <div className="pyro">
        <div className="before" />
        <div className="after" />
        <FireworkSound />
        <button
          className="start"
          style={{
            alignContent: "center"
          }}
          onClick={() => {
            setTimeout(() => this.props.history.replace("/Homescreen"));
          }}
        >
          Play Again
        </button>
      </div>
    );
  }
}

export default Firework;
