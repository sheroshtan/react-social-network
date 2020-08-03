import React from "react";
import {connect} from "react-redux";
import MyPosts from "./my-posts";
import { createAddPostAction,
         createChangePostInputAction } from "../../../redux/profile-page-reducer";
import './my-posts.css';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        inputValue: state.profilePage.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangePost: (text) => {
            const action = createChangePostInputAction(text);
            dispatch(action);
        },
        onAddPost: () => {
            const action = createAddPostAction();
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;