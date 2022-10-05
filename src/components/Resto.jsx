import React from "react";

export default function Resto(props) {
  return (
    <>
      <h1 className="foodtitle">{props.title}</h1>
      <div className="foodinfo">
        <div className="description">{props.description}</div>
        <p className="menu">{props.menu}</p>
      </div>
    </>
  );
}
