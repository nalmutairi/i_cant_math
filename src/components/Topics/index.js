import React, { Component } from "react";
import { flash, fadeOutLeft, fadeOutRight } from "react-animations";
import Click from "./sound";

import SocketStore from "../../stores/socketStore";

import "./styles.css";
import { Spring } from "react-spring";

import TopicName from "./TopicName";

class Topic extends Component {
  constructor(props) {
    super(props);

    this.topics = [
      "Linear Equations",
      "Equations Containing Radicals",
      "Equations Containing Absolute Values"
    ];
  }

  render() {
    let TopicList;
    TopicList = this.topics.map((topic, index) => (
      <TopicName
        topic={topic}
        key={index}
        index={index}
        history={this.props.history}
      />
    ));

    return (
      <div>
        <div className="title ">
          <h1 className="animated flash" style={{ color: "white" }}>
            Choose Your Topic!
          </h1>

          {TopicList}
        </div>
      </div>
    );
  }
}

export default Topic;
