import React from 'react';
import { Route } from "react-router-dom";
import Header from "./components/header/header";
import SidebarNav from "./components/sidebar-nav/sidebarNav";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";
import Friends from "./components/friends/friends";
import News from "./components/news/news";
import Settings from "./components/settings/settings";


import './App.css';

const App = (props) => {

    return (

        <div className="app-wrapper grid">

            <Header/>

            <main>
                <div className="container main-container grid">

                    <SidebarNav/>

                    <div className='content bg-white'>

                        <Route path="/profile"
                               render={() => <Profile postsData={props.state.profilePage.postsData}
                                                      addPost={props.addPost}
                                                      onChangePostInput={props.onChangePostInput}
                                                      inputValue={props.state.profilePage.inputValue} />}
                        />

                        <Route path="/dialogs"
                               render={() => <Dialogs conversationsData={props.state.messagesPage.conversationsData}
                                                      messagesData={props.state.messagesPage.messagesData} />}
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