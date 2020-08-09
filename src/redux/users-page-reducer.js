const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW : {
            //action.target.classList = "btn-follow followed";
            console.log('follow');
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            isFollowed: true
                        }
                    }
                    return  {...user};
                })
            };
        }
        case UNFOLLOW : {
            console.log('Unfollow');
            //action.target.classList = "btn-follow";
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {
                            ...user,
                            isFollowed: false
                        }
                    }
                    return  {...user};
                })
            };
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId, target) => ( {type: FOLLOW, userId, target} );
export const unfollowAC = (userId, target) => ( {type: UNFOLLOW, userId, target} );
export const setUsersAC = (users) => ( {type: SET_USERS, users} );

export default usersPageReducer;