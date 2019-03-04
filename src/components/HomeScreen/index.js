import React, { Component } from "react";

import posed from "react-pose";
import "./styles.css";
import HomepageSound from "./sound";
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
      <div>
        <div>
          <HomepageSound />
          <div>
            <MathText
              className="text "
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => this.handleClick()}
            >
              Let's Math!
            </MathText>
          </div>
          <div>
            <p className="plusSign ">+</p>
          </div>
          <div>
            <p className="plusSign ">-</p>
          </div>
          <div>
            <p className="plusSign ">x</p>
          </div>
          <div>
            <p className="plusSign ">%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
