import React from "react";
import {Divider} from "@material-ui/core";
import {Link} from "react-router-dom";
import {addTransaction, menu} from "../common/LeftSideBar";

const LeftSideBar = () => {
    return (
        <div className="left-side-bar">
            <div className="left-side-bar__menu">
                <span className="title">{menu.title}</span>
                <div className="link-container">
                    {menu.links.map((item, index) => (
                        <Link
                            key={index}
                            className="link-container__link  left-side-bar__text-content"
                            to={item.link}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <Divider/>
            <div className="left-side-bar__menu">
                <span className="title add-transaction">{addTransaction.title}</span>
                <div className="link-container">
                    {addTransaction.links.map((item, index) => (
                        <Link
                            key={index}
                            className="link-container__link left-side-bar__text-content"
                            to={item.link}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;
