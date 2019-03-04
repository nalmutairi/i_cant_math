import React, { Component } from "react";
import Timer from "../Timer";
import newsocket from "../../stores/socketStore";
import MathJax from "react-mathjax-preview";
import "./styles.css";
import CardGroup from "react-bootstrap/CardGroup";

import UserIcon from "./UserIcon";
import { observer } from "mobx-react";

class Question extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      question: ""
    };
  }

  componentDidMount() {
    this.end();
    // this.loadScores();
    this.getQuestion();
    this.showScores();
  }
  end() {
    newsocket.socket.on("end", () =>
      setTimeout(() => this.props.history.replace("/Firework"), 700)
    );
  }

  getQuestion() {
    newsocket.socket.on("FromAPI", data => this.setState({ question: data }));
  }

  loadScores() {
    newsocket.socket.on("points", () =>
      setTimeout(() => this.props.history.push("/Scores"), 700)
    );
  }

  showScores() {
    let userlist = [];
    newsocket.socket.on("answer", data => {
      console.log(data);
      userlist.push(data);
    });
    this.setState({ users: userlist });
  }

  showQuestion() {
    if (this.state.question) {
      return (
        <h1 style={{ color: "white" }}>
          <MathJax math={this.state.question.question} />
        </h1>
      );
    } else {
      return <p>HAKUNA MATATA</p>;
    }
  }
  render() {
    let users = this.state.users;
    let UserList;
    if (users) {
      UserList = users.map(user => (
        <UserIcon user={user} key={user.username} />
      ));
    }
    console.log("users who answered", this.state.users);
    return (
      <div>
        {this.showQuestion()}
        <div
          className="col-12"
          style={{
            align: "center",
            width: "100%",
            position: "absolute",
            bottom: 0
          }}
        >
          {UserList}
        </div>
        <CardGroup
          style={{
            width: "100%",

            bottom: 0,
            position: "absolute"
          }}
        >
          {UserList}
        </CardGroup>
      </div>
    );
  }
}

export default observer(Question);
