import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/icon/logo.svg";
import useFetch from "use-http";
import { logout } from "../common/Inquiries/User";
import { API_URL } from "../evn";
import { useGlobalState } from "../globalState";

const Header = () => {
  const hookFetchData = useFetch(API_URL);
  const [loginFollow, setLoginFollow] = useGlobalState("login");

  const logOut = async () => {
    const out = await logout(
      localStorage.token && localStorage.getItem("token")
    );
    if (out) {
      setLoginFollow(false);
      localStorage.removeItem("token");
    }
  };

  return (
    <div className="header">
      <Link to="/pages/OTC-Single" className="logo-container">
        <img src={logo} alt="logo" />
      </Link>
      {loginFollow ? (
        <span onClick={logOut} className="log-out">
          Log Out
        </span>
      ) : (
        <Link to="/login" className="login">
          Log in
        </Link>
      )}
    </div>
  );
};

export default Header;
