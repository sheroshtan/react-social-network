import React from "react";
import Logo from "../../images/logo-sn.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import './header.css';
import {NavLink} from "react-router-dom";
import Avatar from '../../images/user-avatar.png';

const Header = (props) => {

    const authContent = props.isAuth
        ?   <>
                <NavLink to='/login'>
                    <img src={props.photos.small || Avatar} alt="profile-avatar"/>
                    <span>{props.login}</span>
                </NavLink>
                <FontAwesomeIcon icon={faSignOutAlt} className="icon-logout" onClick={props.logout} />
            </>
        :
        <NavLink to='/login'>
                <FontAwesomeIcon icon={faSignInAlt} className="icon-login"/>
                <span>Login</span>
        </NavLink>

    return (
        <header className="header">
            <div className="container">
                <a href="http://localhost:3000/" className="header-logo">
                    <img className="logo" src={Logo} alt="logo"/>
                    <span>Social Network</span>
                </a>
                <div className="login">
                    {
                        authContent
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;