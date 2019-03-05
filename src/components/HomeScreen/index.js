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
              height: 320,
              width: 320,
              position: "relative",
              left: "500px",
              top: "50px"
            }}
            src={plus}
          />
          <img
            style={{
              height: 320,
              width: 320,
              bottom: 50,
              top: 400,
              position: "fixed"
            }}
            src={divide}
          />
          <img style={{ height: 120, width: 120 }} src={minus} />
          <img style={{ height: 120, width: 120 }} src={multiply} />
          <MathText
            style={{ textAlign: "center", verticalAlign: "middle" }}
            className="text"
            style={{ textDecoration: "none", color: "white" }}
            onClick={() => this.handleClick()}
          >
            Let's Math!
          </MathText>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
