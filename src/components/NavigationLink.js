import React from "react";
import { Link } from "react-router-dom";
export default function NavigationLink() {
  return (
    <div className="navigation-container">
      <ul>
        <li>
          <Link to="/students">Students Mangement</Link>
        </li>
        <li>
          <Link to="/mentors">Mentor Management</Link>
        </li>
      </ul>
    </div>
  );
}
