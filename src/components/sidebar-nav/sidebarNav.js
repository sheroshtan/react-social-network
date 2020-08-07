import React from "react";
import {NavLink} from "react-router-dom";

import './sidebarNav.css';


const SidebarNav = () => {
    return (
        <nav className="sidebar-nav">
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/dialogs">Messages</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </nav>
    )
}

export default SidebarNav;