import React from 'react';
import { Route } from "react-router-dom";
import HeaderContainer from "./components/header/headerContainer";
import SidebarNav from "./components/sidebar-nav/sidebarNav";
import Friends from "./components/friends/friends";
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import DialogsContainer from "./components/dialogs/dialogs-container";
import UsersContainer from "./components/users/users-container";
import ProfileContainer from "./components/profile/profileContainer";
import './App.css';
import Login from "./components/login/login";


const App = (props) => {

    return (
        <div className="app-wrapper grid">
            <HeaderContainer/>
            <main>
                <div className="container main-container grid">
                    <SidebarNav />
                    <div className='content bg-white'>
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer />}/>

                        <Route path="/dialogs"
                               render={() => <DialogsContainer />}/>

                        <Route path="/users"
                               render={() => <UsersContainer />}/>

                        <Route path="/login"
                               render={() => <Login />}/>

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