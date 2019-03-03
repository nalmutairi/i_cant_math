import React, { Component } from "react";
import posed from "react-pose";
import "./styles.css";
import HomepageSound from "./sound";
import { Link } from "react-router-dom";

class HomeScreen extends Component {
  handleClick() {
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
      <div className="col-lg-4 col-md-6 col-12 ">
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
