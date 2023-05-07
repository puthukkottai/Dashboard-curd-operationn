import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationLink from "./components/NavigationLink";
import RoutesPage from "./components/Routes";
export default function FirstPage() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar-container">
          <h1>Dashboard</h1>

          <NavigationLink />
        </div>
        <div className="content-container">
          <RoutesPage />
        </div>
      </div>
    </Router>
  );
}
