import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import CardGroup from "react-bootstrap/CardGroup";
import "./styles.css";

import { observer } from "mobx-react";
import socketIOClient from "socket.io-client";

//Components
import UserIcon from "./UserIcon";
//Store
import SocketStore from "../../stores/socketStore";

class SubTopic extends Component {
  constructor() {
    super();
    this.state = {
      code: SocketStore.code,
      loading: true
    };

    // Socket.on("room code", data => this.setState({ code: data }));
  }

  // componentDidMount() {
  //   console.log("MOUNTED");
  //   console.log("HEEY", SocketStore.socket);
  //   SocketStore.socket.on("room code", data => this.setState({ code: data }));
  // }

  // getQ() {
  //   SocketStore.getQuestion();
  //   console.log("socket question", SocketStore.question);
  //   if (SocketStore.question) {
  //     return <h1 style={{ color: "white" }}>found</h1>;
  //   }
  // }

  render() {
    if (!this.state.loading) {
      console.log("COOO", this.state.code);
    }

    let users = SocketStore.users;
    // let users = [{ username: "dsfsdf" }, { username: "dsfsdf" }];
    let UserList;
    if (users) {
      UserList = users.map(user => (
        <UserIcon user={user} key={user.username} />
      ));
    }

    console.log("SOCKET", this.state.code);
    return (
      <div>
        <h1 style={{ color: "white" }}>{this.state.code}</h1>
        <button
          onClick={() => {
            SocketStore.startGame(this.state.code);
            setTimeout(() => this.props.history.replace("/Question"), 700);
          }}
        >
          Start Game
        </button>
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

export default observer(SubTopic);
