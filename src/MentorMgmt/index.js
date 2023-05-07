import React from "react";
import { Link } from "react-router-dom";

export default function Mentor() {
  return (
    <div>
      <div className="imageBanner">
        <img
          className="imgBTS"
          src="https://www.shutterstock.com/image-vector/design-concept-word-teaching-website-260nw-1043962960.jpg"
          alt=",,,"
        />
      </div>
      <div className="mentor-data">
        <div className="buttonClass">
          <ul className="ul-flex">
            <li>
              <Link to="/mentors/create">Create</Link>
            </li>
            <li>
              <Link to="/mentors/read">Read</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
