import {AuthApi, SecurityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.payload
            };
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload
            }
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

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    PAYLOAD: {captchaUrl}
})

// thunk creators
export const getAuthUserData = () => async (dispatch) => {
    const response = await AuthApi.me();

    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, captchaUrl) => async (dispatch) => {
    const response = await AuthApi.login(email, password, rememberMe, captchaUrl);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl(captchaUrl));
        }
        const errorMessage = response.data.messages.length ? response.data.messages[0] : 'Unknown error';
        dispatch(stopSubmit('login', {_error: errorMessage}));
    }
}

export const logout = () => async (dispatch) => {
    const response = await AuthApi.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await SecurityApi.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;