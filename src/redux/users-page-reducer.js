const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isLoading: false
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
        default:
            return state;
    }
}

export const follow = (userId, target) => ( {type: FOLLOW, userId, target} );
export const unFollow = (userId, target) => ( {type: UNFOLLOW, userId, target} );
export const setUsers = (users) => ( {type: SET_USERS, users} );
export const changePage = (page) => ( {type: CHANGE_PAGE, page} );
export const setTotalUsersCount = (count) => ( {type: SET_TOTAL_USERS_COUNT, count} );
export const toggleLoading = (loading) => ( {type:TOGGLE_LOADING, isLoading: loading} );

export default usersPageReducer;