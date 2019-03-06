import React, { Component } from "react";

import posed from "react-pose";
import "./styles.css";
import HomepageSound from "./sound";
import { Link } from "react-router-dom";
import plus from "../../plussign.gif";
import divide from "../../dividesign.gif";
import minus from "../../minussign.gif";
import multiply from "../../multiplysign.gif";

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
      <div>
        <HomepageSound />
        <div>
          <img
            style={{
              height: 280,
              width: 280,
              top: 600,
              bottom: 60,
              right: 300,
              position: "fixed"
            }}
            src={plus}
          />

          <img
            style={{
              height: 280,
              width: 280,
              top: 20,
              bottom: 600,
              right: 300,
              position: "fixed"
            }}
            src={minus}
          />
          <img
            style={{
              height: 280,
              width: 280,
              top: 20,
              bottom: 500,
              left: 500,
              position: "fixed"
            }}
            src={multiply}
          />
          <MathText
            style={{
              left: 0,
              margin: "auto",
              position: "absolute",
              top: "50%",
              width: "100%"
            }}
            className="text"
            style={{ textDecoration: "none", color: "white" }}
            onClick={() => this.handleClick()}
          >
            Let's Math!
          </MathText>
          <div>
            <img
              style={{
                height: 280,
                width: 280,
                bottom: 20,
                top: 600,
                left: 300,
                position: "fixed"
              }}
              src={divide}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
