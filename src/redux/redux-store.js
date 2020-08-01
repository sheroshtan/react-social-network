import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profile-page-reducer";
import messagesPageReducer from "./messages-page-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer
});

let store = createStore(reducers);

export default store;