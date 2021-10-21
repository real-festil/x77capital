import { ButtonBase } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const RightSideBar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="right-side-bar">
      <div className="right-side-bar__menu">
        <span className="title">Balance</span>
        <div className="right-side-bar__trading">
          <span className="right-side-bar__text-content">Banks</span>
        </div>
      </div>
      <div className="following-container">
        <div className="following-container__folow">
          <span
            className={`following-container__folow__off ${!active && "active"}`}
            onClick={() => setActive(false)}
          >
            off
          </span>
          <span
            className={`following-container__folow__on ${active && "active"}`}
            onClick={() => setActive(true)}
          >
            on
          </span>
        </div>
        <span className="following-container__text">Hide zero balances </span>
      </div>
      <ButtonBase type="submit" className="button-close">
        <span className="button-close__text">Close a trading session</span>
      </ButtonBase>
    </div>
  );
};

export default RightSideBar;
