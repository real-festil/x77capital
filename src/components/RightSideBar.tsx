import { ButtonBase } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const RightSideBar = () => {
  const menu = {
    title: "Menu",
    links: [
      { name: "Profit log", link: "/" },
      { name: "Bank Accounting", link: "/" },
      { name: "Statistics", link: "/" },
      { name: "SecureP", link: "/" },
      { name: "History", link: "/" },
      { name: "Settings", link: "/" },
    ],
  };
  const addTransaction = {
    title: "Add transaction:",
    links: [
      { name: "Exchange OTC Single ", link: "/" },
      { name: "Exchange OTC Linking", link: "/" },
      { name: "Private OTC / Cash", link: "/" },
      { name: "Arbitrage (forks)", link: "/" },
    ],
  };
  return (
    <div className="right-side-bar">
      <div className="right-side-bar__menu">
        <span className="title">Balance</span>
        <div className="right-side-bar__text-content">
          {/* {menu.links.map((item, index) => (
            <Link className="link-container__link" to={item.link}>
              {item.name}
            </Link>
          ))} */}
        </div>
      </div>
      <div className="following-container">
        <span className="following-container__text"></span>
      </div>
      <ButtonBase type="submit" className="button-close">
        <span className="button-close__text">Close a trading session</span>
      </ButtonBase>
    </div>
  );
};

export default RightSideBar;
