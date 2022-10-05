import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/food">food trip</Link>
        </li>
        <li>
          <Link to="/place">iconic places</Link>
        </li>
      </ul>
    </div>
  );
}
