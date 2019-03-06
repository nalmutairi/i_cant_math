import React, { Component } from "react";
import "./styles.css";
import newsocket from "../../stores/socketStore";
import posed from "react-pose";
import Click from "./sound";
import ReactPlayer from "react-player";

class TopicName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeOutLeft: "",
      fadeOutRight: "",
      chosenTopic: ""
    };
  }

  handleClick(history, topic) {
    this.setState({
      fadeOutLeft: "animated fadeOutLeft",
      fadeOutRight: "animated fadeOutRight",
      chosenTopic: topic
    });

    newsocket.choseTopic(topic.replace(/\s+/g, "-").toLowerCase());

    setTimeout(() => history.replace("/Difficulty"), 700);
    return (
      <div>
        <Click />
      </div>
    );
  }

  getTopics(topic, index) {
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
            onClick={() => this.handleClick(this.props.history, topic)}
            style={{ color: "white" }}
          >
            {topic}
          </MathText>
        </div>
      );
    } else {
      return (
        <div className={this.state.fadeOutRight}>
          <MathText
            className="options"
            onClick={() => this.handleClick(this.props.history, topic)}
            style={{ color: "white" }}
          >
            {topic}
          </MathText>
        </div>
      );
    }
  }
  render() {
    const { topic, index } = this.props;

    return this.getTopics(topic, index);
  }
}

export default TopicName;
