import React, { Component } from "react";

import newsocket from "../../stores/socketStore";
import FireworkSound from "./sound";
import Scores from "../Scores";
import "./styles.css";

class Firework extends Component {
  render() {
    return (
      <div className="pyro">
        <div className="before" />
        <div className="after" />
        <FireworkSound />
        <Scores />
        <button
          className="start"
          style={{
            alignContent: "center"
          }}
          onClick={() => {
            newsocket.reconnectSocket();
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
