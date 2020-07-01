import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/header/header";
import SidebarNav from "./components/sidebar-nav/sidebarNav";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";
import Friends from "./components/friends/friends";
import News from "./components/news/news";
import Settings from "./components/settings/settings";

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper grid">

                <Header />

                <main>
                    <div className="container main-container grid">

                        <SidebarNav />


                        <div className='content bg-white'>

                            <Route path="/profile" component={Profile}/>

                            <Route path="/dialogs" component={Dialogs}/>

                            <Route path="/friends" component={Friends}/>

                            <Route path="/news" component={News}/>

                            <Route path="/settings" component={Settings}/>

                        </div>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;