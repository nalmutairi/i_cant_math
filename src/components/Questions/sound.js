import React from "react";

class Sound extends React.Component {
  render() {
    return (
      <div>
        <audio
          src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-25674/zapsplat_cartoon_pluck_hair_001_27052.mp3?_=4"
          autoPlay={true}
          loop={false}
        />
      </div>
    );
  }
}
export default Sound;
