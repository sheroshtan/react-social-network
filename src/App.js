import React from 'react';
import { Route } from "react-router-dom";
import Header from "./components/header/header";
import SidebarNav from "./components/sidebar-nav/sidebarNav";
import Friends from "./components/friends/friends";
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import DialogsContainer from "./components/dialogs/dialogs-container";
import UsersContainer from "./components/users/users-container";
import ProfileContainer from "./components/profile/profileContainer";
import './App.css';

const App = (props) => {

    return (
        <div className="app-wrapper grid">
            <Header/>
            <main>
                <div className="container main-container grid">
                    <SidebarNav />
                    <div className='content bg-white'>
                        <Route path="/profile"
                               render={() => <ProfileContainer />}/>

                        <Route path="/dialogs"
                               render={() => <DialogsContainer />}/>

                        <Route path="/users"
                               render={() => <UsersContainer />}/>

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