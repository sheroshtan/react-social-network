import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import profilePageReducer from "./profile-page-reducer";
import messagesPageReducer from "./messages-page-reducer";
import usersPageReducer from "./users-page-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

// for practice
window.store = store;

export default store;