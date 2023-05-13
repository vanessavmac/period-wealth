import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return(
    <div className="landing">
      <h1 className="large-h1">PeriodWealth</h1>
      <h3>making free period products accessible</h3>
      <Link to="/signup"><button className="button-1">Sign Up</button></Link>      
      <Link to="/login"><button className="button-1">Log In</button></Link>
    </div>
  );
}
