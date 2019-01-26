import React from "react";
import Logo from "../assets/images/HOAhelper_Yellow_KO.png";

const Nav = props => (
  <div className="topnav" id="myTopnav">
    <a href="#" id="logo-link">
      <img id="nav-logo" alt="logo" src={Logo} />
    </a>
    <a href="#">
      <i className="fa fa-outdent" />Logout
    </a>
    <a href="/">
      <i className="fa fa-home" />Residents List
    </a>
  </div>
);

export default Nav;
