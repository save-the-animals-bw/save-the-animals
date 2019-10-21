import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img className="logo-image" src={require("../images/logo.png")} />
        <h1>Save The Animals</h1>
      </div>
      <div className="links">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
        <NavLink className="nav-link" to="/supporter-login">
          Supporter Login
        </NavLink>
        <NavLink className="nav-link" to="/org-login">
          Organization Login
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
