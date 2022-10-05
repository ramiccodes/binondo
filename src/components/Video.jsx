import React from "react";

export default function Video(props) {
  return (
    <div className="hero">
      <div className="herotext">
        <h1>binondo</h1>
        <a href="https://en.wikipedia.org/wiki/Binondo">
          the world's oldest chinatown
        </a>
      </div>
      <div className="linemiddle"></div>
      <div className="linebottom"></div>
      <div className="herovideo">
        <video src={props.video} type="video/mp4" autoPlay loop muted></video>
      </div>
    </div>
  );
}
