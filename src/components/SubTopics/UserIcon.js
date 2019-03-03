import React, { Component } from "react";
import Table from "react-bootstrap/Table";
class UserProfile extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <h1 style={{ color: "white" }}>{user.username}</h1>
        <img
          style={{ height: 100, width: 150 }}
          src="https://lh5.googleusercontent.com/-3kf_BDC5gcc/TW7TZQKFWTI/AAAAAAAAEok/6Ysj8vQknM8/s400/puffleeat.gif"
        />
      </div>
    );
  }
}

export default UserProfile;
