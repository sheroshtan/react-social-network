import React from 'react';
import { Route } from "react-router-dom";
import Header from "./components/header/header";
import SidebarNav from "./components/sidebar-nav/sidebarNav";
import Profile from "./components/profile/profile";
import Friends from "./components/friends/friends";
import News from "./components/news/news";
import Settings from "./components/settings/settings";

import './App.css';
import DialogsContainer from "./components/dialogs/dialogs-container";


const App = (props) => {

    return (
        <div className="app-wrapper grid">
            <Header/>

            <main>
                <div className="container main-container grid">
                    <SidebarNav/>

                    <div className='content bg-white'>
                        <Route path="/profile"
                               render={() => <Profile store={props.store}/>}
                        />

                        <Route path="/dialogs"
                               render={() => <DialogsContainer store={props.store}/>}
                        />

                        <Route path="/friends" component={Friends}/>

                        <Route path="/news" component={News}/>

                        <Route path="/settings" component={Settings}/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;