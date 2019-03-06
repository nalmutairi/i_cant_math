import React, { Component } from "react";
import newsocket from "../../stores/socketStore";

import "./styles.css";

import posed from "react-pose";

class LevelName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeOutLeft: "",
      fadeOutRight: "",
      chosenLevel: ""
    };
  }

  handleClick(history, level) {
    this.setState({
      fadeOutLeft: "animated fadeOutLeft",
      fadeOutRight: "animated fadeOutRight",
      chosenLevel: level
    });

    newsocket.choseLevel(level.toLowerCase().replace(" ", "-"));
    setTimeout(() => history.replace("/SubTopic"), 700);
  }

  getLevels(level, index) {
    const MathText = posed.div({
      hoverable: true,
      pressable: true,
      init: {
        scale: 1
      },
      hover: {
        scale: 1.2
      },
      press: {
        scale: 1.1
      }
    });

    if (index % 2 === 0) {
      return (
        <div className={this.state.fadeOutLeft}>
          <MathText
            className="options"
            onClick={() => this.handleClick(this.props.history, level)}
            style={{ color: "white", fontFamily: "EraserDust", fontSize: 65 }}
          >
            {level}
          </MathText>
        </div>
      );
    } else {
      return (
        <div className={this.state.fadeOutRight}>
          <MathText
            className="options"
            onClick={() => this.handleClick(this.props.history, level)}
            style={{ color: "white", fontFamily: "EraserDust", fontSize: 65 }}
          >
            {level}
          </MathText>
        </div>
      );
    }
  }

  render() {
    const { level, index } = this.props;

    return this.getLevels(level, index);
  }
}

export default LevelName;
