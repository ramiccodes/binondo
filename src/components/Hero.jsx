import React from "react";
import Video from "./Video";
import binondomorning from "../assets/imagesVideo/binondomorning.mp4";
import binondoafternoon from "../assets/imagesVideo/binondoafternoon.mp4";
import binondonight from "../assets/imagesVideo/binondonight.mp4";

export default function Hero() {
  const [video, setVideo] = React.useState({});

  React.useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 4 && hours < 12) {
      setVideo(binondomorning);
    } else if (hours >= 12 && hours < 17) {
      setVideo(binondoafternoon);
    } else {
      setVideo(binondonight);
    }
  }, []);

  return <Video video={video} />;
}
