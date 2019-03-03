import React, { Component } from "react";
import Timer from "../Timer";
import newsocket from "../../stores/socketStore";
import MathJax from "react-mathjax-preview";
import "./styles.css";

import { observer } from "mobx-react";

class Question extends Component {
  constructor() {
    super();

    this.end();
    this.loadScores();
  }

  end() {
    newsocket.socket.on("end", () =>
      setTimeout(() => this.props.history.push("/Firework"), 700)
    );
  }

  loadScores() {
    newsocket.socket.on("add scores", () =>
      setTimeout(() => this.props.history.push("/Scores"), 700)
    );
  }

  showQuestion() {
    if (newsocket.question) {
      return (
        <h1 style={{ color: "white" }}>
          <MathJax math={newsocket.question.question} />
        </h1>
      );
    } else {
      return <p>SAVE ME</p>;
    }
  }
  render() {
    return this.showQuestion();
  }
}

export default observer(Question);
