import React from "react";
import Logo from "../../images/logo-sn.png";

import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <a href="#" className="header-logo">
                    <img className="logo" src={Logo} alt="logo"/>
                    <span>Social Network</span>
                </a>
            </div>
        </header>
    )
}

export default Header;