import React from "react";

class FireworkSound extends React.Component {
  render() {
    return (
      <div>
        <audio
          src="http://audiosoundclips.com/wp-content/uploads/2014/02/Fireworks-2.mp3"
          autoPlay={true}
          loop={true}
        />
      </div>
    );
  }
}

export default FireworkSound;
