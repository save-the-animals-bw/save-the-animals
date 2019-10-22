import React, { useEffect } from "react";
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'

import { getUser, logout } from '../actions'

function NavBar(props) {
  useEffect(() => {
    getUser()
  }, [props.user])

  if (props.user.userType === 'support'){
    return(
      <div className="nav-bar">
      <div className="logo-container">
        <img className="logo-image" src={require("../images/logo.png")} />
        <h1>Save The Animals</h1>
      </div>
      <div className="links">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/supporter-campaigns">
          Campaigns
        </NavLink>
        <NavLink className="nav-link" to="/donate">
          Donate
        </NavLink>
        <a href="#" className='logout' onClick={() => props.logout()}>Log Out</a>
      </div>
    </div>
    )
  } else if (props.user.userType === 'organization'){
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
        <NavLink className="nav-link" to="/org-campaigns">
          Campaigns
        </NavLink>
        <NavLink className="nav-link" to="/add-campaign">
          Add Campaign
        </NavLink>
        <a href="#" className='logout' onClick={() => props.logout()}>Log Out</a>
      </div>
    </div>
    )
  } else {
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
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { getUser, logout })(NavBar);
