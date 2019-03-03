import React from "react";

class HomepageSound extends React.Component {
  render() {
    return (
      <div>
        <audio
          src="https://audio-previews.elements.envatousercontent.com/files/52332414/preview.mp3"
          autoPlay={true}
          loop={true}
        />
      </div>
    );
  }
}

export default HomepageSound;
