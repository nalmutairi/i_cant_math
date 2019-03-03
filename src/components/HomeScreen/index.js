import React, { Component } from "react";

import posed from "react-pose";
import "./styles.css";
import { bounce } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";

//Store
import SocketStore from "../../stores/socketStore";

class HomeScreen extends Component {
  handleClick() {
    SocketStore.playNow();
    setTimeout(() => this.props.history.replace("/Topic"), 300);
  }

  render() {
    const MathText = posed.div({
      hoverable: true,
      pressable: true,
      init: {
        scale: 1
      },
      hover: {
        scale: 1.2
      },
      press: {
        scale: 1.1
      }
    });

    return (
      <div className="col-lg-12 col-md-6 col-4">
        <div>
          <MathText
            className="text"
            style={{ textDecoration: "none", color: "white" }}
            onClick={() => this.handleClick()}
          >
            Let's Math!
          </MathText>
        </div>
        <div>
          <p className="plusSign animate bounce">+</p>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
