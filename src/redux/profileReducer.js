import {ProfileApi} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData:[
        {id: 1, likesCount: 22, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam animi culpa, dolores eaque exercitationem facilis fuga hic libero magni, neque odio possimus quasi quia, saepe veritatis voluptates! Ad, sunt."},
        {id: 2, likesCount: 13, text: "Aliquid aspernatur cumque debitis esse id necessitatibus nihil recusandae reprehenderit voluptate! Alias aliquam dolore eaque eveniet hic iure magni neque nisi non, pariatur quam quis ratione totam vitae voluptatibus.Fuga? Ad aperiam, atque culpa cupiditate eveniet facilis natus quae quaerat rem. Accusamus cumque dolor esse iusto, molestiae molestias natus necessitatibus non quae quam quidem quos rem rerum tempore velit vero."},
        {id: 3, likesCount: 217, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque dignissimos enim facilis labore molestiae nisi non sunt tempore velit? Consequuntur, dolorum eius omnis possimus quam quibusdam quisquam sunt voluptate? Aliquam aperiam, dolore dolorum earum illum inventore mollitia necessitatibus nisi quaerat quia quidem quo, repellat reprehenderit tempore tenetur. Aliquid atque consectetur consequatur eligendi ex iure numquam recusandae sequi vero voluptas?"}
    ],
    profile: null,
    status: ''
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            const lastPostId = state.postsData[state.postsData.length - 1].id;
            const postText = action.post;

            const newPost = {
                id: lastPostId + 1,
                likesCount: 0,
                text: postText
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(post => post !== action.id)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        }
        default:
            return state;
    }
}

// action creators
export const addPost = (post) => ( {type: ADD_POST, post} );
export const deletePost = (id) => ( {type: DELETE_POST, id} );
export const setStatus = (status) => ( {type: SET_STATUS, status} );
export const savePhotoSuccess = (photos) => ( {type: SAVE_PHOTO_SUCCESS, photos} );
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

// thunk creators
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await ProfileApi.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await ProfileApi.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await ProfileApi.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = file => async (dispatch) => {
    const response = await ProfileApi.savePhoto(file);

    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profilePageReducer;