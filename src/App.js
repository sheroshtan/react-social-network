import React from 'react';
import Header from "./components/header/header";
import SidebarNav from "./components/sidebar-nav/sidebarNav";
import ContentProfile from "./components/content-profile/content-profile";

import './App.css';

const App = () => {
    return (
        <div className="app-wrapper grid">

            <Header />

            <main>
                <div className="container main-container grid">

                    <SidebarNav />

                    <ContentProfile />

                </div>
            </main>
        </div>
    );
};

export default App;