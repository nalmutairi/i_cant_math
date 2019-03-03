import React, { Component } from "react";
import { observer } from "mobx-react";
import newsocket from "../../stores/socketStore";
import UserProfile from "./UserProfile";
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
  }

  componentDidMount() {
    this.transitionBack();
  }

  getPoints() {
    newsocket.socket.on("points", data => {
      console.log("POINTS", data);
      this.setState({ users: data });
    });
  }

  transitionBack() {
    setTimeout(() => this.props.history.push("/Question"), 2000);
  }

  getUserScores() {
    let users = newsocket.scores;
    // let users = [
    //   { username: "BU BADER", points: 2 },
    //   { username: "BU BADER", points: 3 },
    //   { username: "BU BADER", points: 3 },
    //   { username: "BU BADER", points: 0 },
    //   { username: "BU BADER", points: 1 }
    // ];
    let UserList;
    if (users) {
      UserList = users.map(user => (
        <td>
          <UserProfile user={user} key={user.username} />
        </td>
      ));
    }

    return (
      <div
        className="container"
        style={{
          bottom: 0,
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        {UserList}
      </div>
    );
  }
  render() {
    console.log("USERS", newsocket.scores);
    // this.getUserScores();
    return this.getUserScores();
  }
}
export default observer(Scores);
