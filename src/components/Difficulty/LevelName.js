import React, { Component } from "react";
import newsocket from "../../stores/socketStore";

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
    if (index % 2 === 0) {
      return (
        <div className={this.state.fadeOutLeft}>
          <h3
            className="options"
            onClick={() => this.handleClick(this.props.history, level)}
            style={{ color: "white" }}
          >
            {level}
          </h3>
        </div>
      );
    } else {
      return (
        <div className={this.state.fadeOutRight}>
          <h3
            className="options"
            onClick={() => this.handleClick(this.props.history, level)}
            style={{ color: "white" }}
          >
            {level}
          </h3>
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
