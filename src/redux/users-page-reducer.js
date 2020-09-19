import {UsersApi} from "../api/api";

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

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW : {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return  {...user};
                })
            };
        }
        case UNFOLLOW : {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return  {...user};
                })
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
export const followSucces = (userId, target) => ( {type: FOLLOW, userId, target} );
export const unFollowSucces = (userId, target) => ( {type: UNFOLLOW, userId, target} );
export const setUsers = (users) => ( {type: SET_USERS, users} );
export const changePage = (page) => ( {type: CHANGE_PAGE, page} );
export const setTotalUsersCount = (count) => ( {type: SET_TOTAL_USERS_COUNT, count} );
export const toggleLoading = (loading) => ( {type:TOGGLE_LOADING, isLoading: loading} );
export const toggleFollowing = (loading, userId) => ( {type:TOGGLE_FOLLOWING, isLoading: loading, userId} );

//thunk creators
export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleLoading(true));
        UsersApi.getUsers(page, pageSize)
            .then(res => {
                dispatch(setUsers(res.items));
                dispatch(toggleLoading(false));
            })
    }
};
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId));
        UsersApi.follow(userId)
            .then(res => {
                if(res.data.resultCode === 0) {
                    dispatch(followSucces(userId));
                }
                dispatch(toggleFollowing(false, userId));
            })
    }
}
export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId));
        UsersApi.unFollow(userId)
            .then(res => {
                if(res.data.resultCode === 0) {
                    dispatch(unFollowSucces(userId));
                }
                dispatch(toggleFollowing(false, userId));
            })
    }
}

export default usersPageReducer;