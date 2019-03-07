import React, { Component } from "react";
import { observer } from "mobx-react";
import newsocket from "../../stores/socketStore";
import UserProfile from "./UserProfile";
import CardColumns from "react-bootstrap/CardColumns";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    // this.getPoints();
    this.showScores();
  }

  // componentDidMount() {
  //   newsocket.socket.on("answer", data => this.setState({ users: data }));
  // }

  showScores() {
    newsocket.socket.on("answer", data => {
      console.log("scoressssss", data);

      this.setState({ users: data });
    });
  }

  transitionBack() {
    setTimeout(() => this.props.history.push("/Question"), 2000);
  }

  getUserScores() {
    let users = newsocket.scorelist;
    console.log("scorelist", users);
    // let users = [
    //   { username: "Asis", points: 7 },
    //   { username: "Lailz", points: 3 },
    //   { username: "Fawas", points: 0 },
    //   { username: "Hams", points: 1 },
    //   { username: "Bee", points: 20 }
    // ];
    let UserList;
    if (users) {
      UserList = users.map(user => (
        <UserProfile user={user} key={user.username} />
      ));
    }

    return (
      <CardGroup
        style={{
          width: "100%",

          bottom: 0,
          position: "absolute"
        }}
      >
        {UserList}
      </CardGroup>
    );
  }
  render() {
    console.log("USERS", newsocket.scores);
    // this.getUserScores();
    return this.getUserScores();
  }
}
export default observer(Scores);
