import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import { Container, Row, Col } from "reactstrap";

import puff from "../../puff.gif";

class UserIcon extends Component {
  render() {
    const { user } = this.props;

    return (
      <Card
        style={{
          width: 150,
          backgroundColor: "transparent"
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
            <img style={{ width: 150, height: 50 }} src={puff} />
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default UserIcon;