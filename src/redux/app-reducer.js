import {getAuthUserData} from "./auth-reducer";

const INIT_APP = 'INIT_APP';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_APP : {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
}

export const initSucceed = () => ({ type: INIT_APP });

export const initApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initSucceed())
        });
};

export default appReducer;