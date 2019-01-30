import React from "react";
import {Link} from "react-router-dom"
import Logo from "../assets/images/HOAhelper_Yellow_KO.png";

const Nav = props => {
  const isAuth = props.isAuth;
  return (
    <div className="topnav" id="myTopnav">
      <Link to="/" id="logo-link">
        <img id="nav-logo" alt="logo" src={Logo} />
      </Link>
      {isAuth &&
        <a href="/">
          <i className="fa fa-outdent" />Logout
    </a>}
    {isAuth 
        &&
        <Link to="/">
          <i className="fa fa-home" />Residents List
    </Link>
      }
    </div>
  )
};

export default Nav;
