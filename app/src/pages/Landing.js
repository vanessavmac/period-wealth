import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return(
    <>
      <h1>Period Wealth</h1>
      <h2>Making free period products accessible</h2>
      <Link to="/signup">Sign Up</Link>      
      <Link to="/login">Log In</Link>
    </>
  );
}
