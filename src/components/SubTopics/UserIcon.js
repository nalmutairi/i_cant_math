import React, { Component } from "react";
import Table from "react-bootstrap/Table";

import puff from "../../puff.gif";
class UserProfile extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <h1 style={{ color: "white" }}>{user.username}</h1>
        <img style={{ height: 100, width: 150 }} src={puff} />
      </div>
    );
  }
}

export default UserProfile;
