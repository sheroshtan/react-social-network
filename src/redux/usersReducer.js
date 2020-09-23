import {UsersApi} from "../api/api";
import {updateObjInArray} from "../utilities/transformDataHelpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isLoading: false,
    isFollowingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW : {
            return {
                ...state,
                users: updateObjInArray(state.users, action.userId, {'followed': true})
            };
        }
        case UNFOLLOW : {
            return {
                ...state,
                users: updateObjInArray(state.users, action.userId, {'followed': false})
            };
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case CHANGE_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case TOGGLE_FOLLOWING: {
            return {
                ...state,
                isFollowingInProgress: action.isLoading
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

//action creators
export const followSucces = (userId) => ({type: FOLLOW, userId});
export const unFollowSucces = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const changePage = (page) => ({type: CHANGE_PAGE, page});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleLoading = (loading) => ({type: TOGGLE_LOADING, isLoading: loading});
export const toggleFollowing = (loading, userId) => ({type: TOGGLE_FOLLOWING, isLoading: loading, userId});

//thunk creators
export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleLoading(true));
    const response = await UsersApi.getUsers(page, pageSize);

    dispatch(setUsers(response.items));
    dispatch(toggleLoading(false));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, action) => {
    dispatch(toggleFollowing(true, userId));

    const response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(action(userId));
    }

    dispatch(toggleFollowing(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, UsersApi.follow.bind(UsersApi), followSucces);
}

export const unFollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, UsersApi.unFollow.bind(UsersApi), unFollowSucces);
}

export default usersReducer;