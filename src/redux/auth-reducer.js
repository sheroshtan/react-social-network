import {AuthApi} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
}

// action creators
export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

// thunk creators
export const getAuthUserData = () => (dispatch) => {
    return AuthApi.me()
        .then(res => {
            if(res.data.resultCode === 0) {
                const { id, email, login } = res.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    AuthApi.login(email, password, rememberMe)
        .then((res) => {
            if(res.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                const errorMessage = res.data.messages.length ? res.data.messages[0] : 'Unknown error';
                dispatch(stopSubmit('login', { _error: errorMessage }));
            }
        })
}

export const logout = () => (dispatch) => {
    AuthApi.logout()
        .then((res) => {
            if(res.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null, false));
            } else {

            }
        })
}

export default authReducer;