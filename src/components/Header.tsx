import React from "react";
import {Link, useHistory} from "react-router-dom";
import logo from "../images/icon/logo.svg";
import {logout} from "../common/Inquiries/User";
import {useGlobalState} from "../globalState";

const Header = () => {
    const [loginFollow, setLoginFollow] = useGlobalState("login");
    const history = useHistory();

    const logOut = async () => {
        const out = await logout(
            localStorage.token && localStorage.getItem("token")
        );
        if (out) {
            setLoginFollow(false);
            localStorage.removeItem("token");
            history.push("/pages/profit-log");
        }
    };

    return (
        <div className="header">
            <Link to="/pages/OTC-Single" className="logo-container">
                <img src={logo} alt="logo"/>
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
