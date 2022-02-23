import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/new">New User</NavLink>
    </div>
  );
}

export default NavBar;
