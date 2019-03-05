import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import { Container, Row, Col } from "reactstrap";

import greenmon from "../../greenmonster.png";
import puff from "../../puff.gif";
class UserIcon extends Component {
  drawPodium(points) {
    let podium = [];

    for (var i = 0; i < points; i++) {
      var image = new Image();
      image.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Blue_Square.svg/1559px-Blue_Square.svg.png";
      podium.push(image);
      console.log("points", podium);
    }

    return podium;

    // return podium;
  }
  render() {
    const { user } = this.props;
    let PodiumList;
    let podium = this.drawPodium(user.points);

    if (podium) {
      PodiumList = podium.map(pod => (
        <img
          style={{
            height: 50,
            width: 150
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Blue_Square.svg/1559px-Blue_Square.svg.png"
        />
      ));
    }

    return (
      <Card
        style={{
          width: 150,
          backgroundColor: "transparent",
          border: 0
        }}
      >
        <Card.Body
          style={{
            alignItems: "end",
            display: "grid",
            justifyContent: "center"
          }}
        >
          <h1 style={{ color: "pink" }}>{user.username}</h1>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "center",
              width: 150
            }}
          >
            <img style={{ width: 150, height: 150 }} src={user.icon} />
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default UserIcon;
