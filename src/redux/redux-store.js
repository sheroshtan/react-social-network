import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import profilePageReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

// for practice
window.store = store;

export default store;