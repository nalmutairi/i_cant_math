import React, { Component } from "react";

import newsocket from "../../stores/socketStore";
import FireworkSound from "./sound";
import Scores from "../Scores";
import "./styles.css";

class Firework extends Component {
  get getWinner() {
    let users = newsocket.scorelist;
    if (users.length > 0) {
      let x = users[0];
      console.log("x", x);
      users.forEach(user => {
        console.log("iusghfuisdf", user);
        if (user.points > x.points) {
          x = user;
        }
      });
      console.log("x", x);
      return x.username + "!!!!!!";
    }
  }
  render() {
    return (
      <div className="pyro">
        <div className="before" />
        <div className="after" />
        <FireworkSound />
        <h1 style={{ color: "white" }}>{this.getWinner}</h1>
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
