import React from "react";

import './sidebarNav.css';

const SidebarNav = () => {
    return (
        <nav className="sidebar-nav">
            <a href="#">Profile</a>
            <a href="#">Friends</a>
            <a href="#">Messages</a>
            <a href="#">News</a>
            <a href="#">Settings</a>
        </nav>
    )
}

export default SidebarNav;