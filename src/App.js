import React from 'react';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/header/headerContainer";
import SidebarNav from "./components/sidebar-nav/sidebarNav";
import Friends from "./components/friends/friends";
import News from "./components/news/news";
import Settings from "./components/settings/settings";
import DialogsContainer from "./components/dialogs/dialogs-container";
import UsersContainer from "./components/users/users-container";
import ProfileContainer from "./components/profile/profileContainer";
import Login from "./components/login/login";
import MainPage from "./components/main-page/mainPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/redux-store";
import './App.css';

class App extends React.Component {

    componentDidMount() {
        this.props.initApp();
    }

    render() {

        if(!this.props.initialized) return <Preloader />;

        return (
            <div className="app-wrapper grid">
                <HeaderContainer/>
                <main>
                    <div className="container main-container grid">
                        <SidebarNav/>
                        <div className='content bg-white'>
                            <Route exact path="/"
                                   render={() => <MainPage/>}/>

                            <Route path="/profile/:userId?"
                                   render={() => <ProfileContainer/>}/>

                            <Route path="/dialogs"
                                   render={() => <DialogsContainer/>}/>

                            <Route path="/users"
                                   render={() => <UsersContainer/>}/>

                            <Route path="/login"
                                   render={() => <Login/>}/>

                            <Route path="/friends" component={Friends}/>

                            <Route path="/news" component={News}/>

                            <Route path="/settings" component={Settings}/>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initApp })
)(App);

export const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}