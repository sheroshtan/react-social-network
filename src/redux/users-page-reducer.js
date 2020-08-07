const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';


let initialState = {
    users:[
        {id: 1, isFollow: false, fullName: "Maria C.", status: "Lorem ipsum dolor sit amet.", location: { country: "Ukraine", city: "Kharkiv" }, imgUrl: "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_960_720.png"},
        {id: 2, isFollow: true, fullName: "Terrance W.", status: "Ad, sunt?", location: { country: "Russia", city: "Moscow" }, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpMBCGHK-uHMNtS5WvYh6Sce-xEnJ-hByyuLp_ticRZwqGXg-&s"},
        {id: 3, isFollow: false, fullName: "Jessica K.", status: "Consequuntur, dolorum eius omnis possimus.", location: { country: "Belarus", city: 'Minsk' }, imgUrl: "https://www.shareicon.net/data/512x512/2016/07/26/802031_user_512x512.png"}
    ]
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW : {
            action.target.classList = "btn-follow followed";
            return {
                ...state,
                users: [...state.users].map(user => {
                    if(user.id === action.id) {
                        return {
                            ...user,
                            isFollow: 'unfollow'
                        }
                    }
                    return  {...user};
                })
            };
        }
        case UNFOLLOW : {
            action.target.classList = "btn-follow";
            return {
                ...state,
                users: [...state.users].map(user => {
                    if(user.id === action.id) {
                        return {
                            ...user,
                            isFollow: 'follow'
                        }
                    }
                    return  {...user};
                })
            };
        }
        default:
            return state;
    }
}

export const createFollowtAction = (userId, target) => ( {type: FOLLOW, id: userId, target: target} );
export const createUnfollowtAction = (userId, target) => ( {type: UNFOLLOW, id: userId, target: target} );

export default usersPageReducer;