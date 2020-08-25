import {AuthApi, UsersApi} from "../api/api";

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
                ...action.data,
                isAuth: true
            };
        }
        default:
            return state;
    }
}

// action creators
export const setAuthUserData = (id, email, login, photos) => ({type: SET_USER_DATA, data: {id, email, login, photos}});

// thunk creators
export const getAuthUserData = () => (dispatch) => {
    AuthApi.me()
        .then(res => {
            if(res.data.resultCode === 0) {
                const { id, email, login } = res.data.data;
                let photos = null;

                UsersApi.getProfile(id)
                    .then(res => {
                        photos = res.data.photos;
                    })
                    .then(() => dispatch(setAuthUserData(id, email, login, photos)))
            }
        })
}
export default authReducer;