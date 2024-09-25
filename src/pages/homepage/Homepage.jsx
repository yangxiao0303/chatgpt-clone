import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepage">
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
