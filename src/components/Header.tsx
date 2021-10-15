import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/icon/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={logo} alt="logo" />
      </Link>
      <span className="log-out">Log Out</span>
    </div>
  );
};

export default Header;
