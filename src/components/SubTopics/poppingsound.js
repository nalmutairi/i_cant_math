import React from "react";

class PoppingSound extends React.Component {
  render() {
    return (
      <div>
        <audio
          src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-21014/zapsplat_cartoon_character_high_pitched_says_woo_001_23598.mp3"
          autoPlay={true}
          loop={false}
        />
      </div>
    );
  }
}

export default PoppingSound;
