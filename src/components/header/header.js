import React from "react";
import Logo from "../../images/logo-sn.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import './header.css';
import {NavLink} from "react-router-dom";
import Avatar from '../../images/user-avatar.png';

const Header = (props) => {

    const authContent = props.isAuth
        ?   <>
            <img src={props.photos.small || Avatar} alt="profile-avatar"/>
                <span>{props.login}</span>
            </>
        :
            <>
                <FontAwesomeIcon icon={faSignInAlt} className="icon-login"/>
                <span>Login</span>
            </>

    return (
        <header className="header">
            <div className="container">
                <a href="http://localhost:3000/profile" className="header-logo">
                    <img className="logo" src={Logo} alt="logo"/>
                    <span>Social Network</span>
                </a>
                <div className="login">
                    <NavLink to='/login'>
                        {
                            authContent
                        }
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;