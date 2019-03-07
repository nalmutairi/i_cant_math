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

    this.userlist = this.state.users;
    // this.showScores();
  }

  componentDidMount() {
    this.end();
    // this.loadScores();
    this.getQuestion();
    this.showScores(this.userlist);
  }
  end() {
    newsocket.socket.on("end", () =>
      setTimeout(() => this.props.history.push("/Firework"), 700)
    );
  }

  getQuestion() {
    newsocket.socket.on("FromAPI", data => {
      console.log("QUESTION", this.state.question);
      console.log("USER", this.state.user);
      this.setState({ question: data, users: [] });

      console.log("QUESTION!!!!", this.state.question);
      console.log("USER!!!!", this.state.users);
    });
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
      this.setState({ users: data });
      console.log("SHOWING SCORES", userlist);
    });
  }

  showQuestion() {
    if (newsocket.question) {
      return (
        <h1 style={{ color: "white" , fontSize: 400 }}>
          <MathJax math={newsocket.question.question} />
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
        <h1 className="q"> {this.showQuestion()}</h1>

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
