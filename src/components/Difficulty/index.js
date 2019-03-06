import React, { Component } from "react";
import "./styles.css";

import LevelName from "./LevelName";
class Difficulty extends Component {
  constructor(props) {
    super(props);

    this.levels = ["Beginner", "Intermediate", "Advanced"];
  }
  render() {
    let LevelList;
    LevelList = this.levels.map((level, index) => (
      <LevelName
        level={level}
        key={index}
        index={index}
        history={this.props.history}
      />
    ));
    return (
      <div>
        <div>
          <div className="title">
            <h1
              className="animated flash"
              style={{ color: "white", fontFamily: "EraserDust" }}
            >
              Choose Your Difficulty!
            </h1>
          </div>
          {LevelList}
        </div>
      </div>
    );
  }
}

export default Difficulty;
