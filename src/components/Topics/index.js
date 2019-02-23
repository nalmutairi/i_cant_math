import React, { Component } from "react";
import { flash, fadeOutLeft, fadeOutRight } from "react-animations";

import "./styles.css";
import { Spring } from "react-spring";

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = { fadeOutLeft: "", fadeOutRight: "" };
  }

  handleClick() {
    this.setState({
      fadeOutLeft: "animated fadeOutLeft",
      fadeOutRight: "animated fadeOutRight"
    });

    setTimeout(() => this.props.history.replace("/Homescreen"), 700);
    // "/Subtopics/`${id}`"
  }

  render() {
    return (
      <div>
        <div className="title ">
          <h1 className="animated flash" style={{ color: "white" }}>
            Choose Your Topic!
          </h1>
        </div>
        <div className={this.state.fadeOutLeft}>
          <h3
            className="options"
            onClick={() => this.handleClick()}
            style={{ color: "white" }}
          >
            Algebra
          </h3>
        </div>
        <div className={this.state.fadeOutRight}>
          <h3
            className="options"
            onClick={() => this.handleClick()}
            style={{ color: "white" }}
          >
            Arithmetics
          </h3>
        </div>
        <div className={this.state.fadeOutLeft}>
          <h3
            className="options"
            onClick={() => this.handleClick()}
            style={{ color: "white" }}
          >
            Calculus
          </h3>
        </div>
      </div>
    );
  }
}

export default Topic;
