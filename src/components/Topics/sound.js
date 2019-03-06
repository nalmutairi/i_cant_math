import React from "react";
import ReactPlayer from "react-player";

class Click extends React.Component {
  render() {
    return (
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=FwFbwG1Amuw"
          playing={true}
          width={"0px"}
          height={"0px"}
        />
      </div>
    );
  }
}

export default Click;
