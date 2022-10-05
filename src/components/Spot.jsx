import React from "react";

export default function Spot(props) {
  return (
    <>
      <div className="spotcontainer">
        <div className="images">
          <div className="box"></div>
          <img src={props.img} alt={props.alt} className="spotimg" />
        </div>
        <div className="spottext">
          <h1 className="spottitle">{props.title}</h1>
          <p className="spotdescription">{props.description}</p>
        </div>
      </div>
    </>
  );
}
