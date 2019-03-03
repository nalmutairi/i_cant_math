import React, { Component } from "react";
import "./styles.css";
import newsocket from "../../stores/socketStore";
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

    newsocket.choseTopic(topic.toLowerCase().replace(" ", "-"));

    setTimeout(() => history.replace("/Difficulty"), 700);
  }

  getTopics(topic, index) {
    if (index % 2 === 0) {
      return (
        <div className={this.state.fadeOutLeft}>
          <h3
            className="options"
            onClick={() => this.handleClick(this.props.history, topic)}
            style={{ color: "white" }}
          >
            {topic}
          </h3>
        </div>
      );
    } else {
      return (
        <div className={this.state.fadeOutRight}>
          <h3
            className="options"
            onClick={() => this.handleClick(this.props.history, topic)}
            style={{ color: "white" }}
          >
            {topic}
          </h3>
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
