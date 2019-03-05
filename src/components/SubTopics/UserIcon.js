import React, { Component } from "react";
import Table from "react-bootstrap/Table";

import puff from "../../puff.gif";
class UserProfile extends Component {
  render() {
    const { user } = this.props;
    console.log(user.icon);

    return (
      <div>
        <h1 style={{ color: "white" }}>{user.username}</h1>
        <img style={{ height: 200, width: 250 }} src={user.icon} />
      </div>
    );
  }
}

export default UserProfile;
