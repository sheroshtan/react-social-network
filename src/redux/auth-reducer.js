import {AuthApi, ProfileApi} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    photos: null,
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
export const setAuthUserData = (id, email, login, photos, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, photos, isAuth}
});

// thunk creators
export const getAuthUserData = () => (dispatch) => {
    AuthApi.me()
        .then(res => {
            if(res.data.resultCode === 0) {
                const { id, email, login } = res.data.data;
                let photos = null;

                ProfileApi.getProfile(id)
                    .then(res => {
                        photos = res.data.photos;
                    })
                    .then(() => dispatch(setAuthUserData(id, email, login, photos, true)))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    AuthApi.login(email, password, rememberMe)
        .then((res) => {
            if(res.data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        })
}

export const logout = () => (dispatch) => {
    console.log('before logout');
    AuthApi.logout()
        .then((res) => {
            if(res.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,null, false));
            } else {
                console.log('else logout');
            }
        })
}

export default authReducer;