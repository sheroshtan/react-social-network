import React from "react";
import MyPosts from "./my-posts";
import { createAddPostAction,
         createChangePostInputAction } from "../../../redux/profile-page-reducer";
import './my-posts.css';

const MyPostsContainer = (props) => {

    const state = props.store.getState();

    const addPost = () => {
        let action = createAddPostAction();
        props.store.dispatch(action);
    };

    const changePost = (text) => {
        let action = createChangePostInputAction(text);
        props.store.dispatch(action);
    };

    return <MyPosts onChangePost={changePost}
                    onAddPost={addPost}
                    inputValue={state.profilePage.inputValue}
                    postsData={state.profilePage.postsData} />
}

export default MyPostsContainer;