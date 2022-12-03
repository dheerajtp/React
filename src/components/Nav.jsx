import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div style={{ padding: 10 }}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Nav;
