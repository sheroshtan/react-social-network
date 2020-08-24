import {AuthApi, UsersApi} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

// action creators
export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const renderProfileData = (profile) => ({type: SET_USER_PROFILE, profile});

// thunk creators
export const getAuthUserData = () => (dispatch) => {
    AuthApi.me()
        .then(res => {
            if(res.data.resultCode === 0) {
                const { id, email, login } = res.data.data;
                UsersApi.getProfile(id)
                    .then((profile) => {
                        dispatch(renderProfileData(profile.data));
                        dispatch(setAuthUserData(id, email, login));
                    })
            }
        })
}
export default authReducer;