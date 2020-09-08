import React from "react";
import Post from "./post/post";
import './my-posts.css';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    const { postsData } = props;

    const addPost = (formData) => {
        props.addPost(formData.newPost);
    };

    return (
        <div className="posts-wrapper">
            <MyPostsFormRedux onSubmit={addPost}/>
            <div className="posts">
                <span className="title-posts">Recent posts:</span>
                {
                    postsData.map(({id, likesCount, text}) => {
                    return <Post message={text} likesCount={likesCount} key={id} />})
                }
            </div>
        </div>
    )
}

const MyPostsForm = (props) => {
    return (
        <form name="newPost" className="form-default" onSubmit={props.handleSubmit}>
            <label htmlFor="new-post">New post</label>
            <Field name="newPost" id="new-post" component='textarea'/>
            <button className="btn purple btn-add-post">Publish</button>
        </form>
    )
}

const MyPostsFormRedux = reduxForm({form:'myPosts'})(MyPostsForm);

export default MyPosts;