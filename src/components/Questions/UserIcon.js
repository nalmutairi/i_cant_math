import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import { Container, Row, Col } from "reactstrap";
import Sound from "./sound";

class UserIcon extends Component {
  render() {
    const { user } = this.props;

    return (
      <Card
        style={{
          width: 150,
          backgroundColor: "transparent",
          border: 0
        }}
      >
        {" "}
        <Sound />
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
            <img style={{ width: 250, height: 150 }} src={user.icon} />
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default UserIcon;
