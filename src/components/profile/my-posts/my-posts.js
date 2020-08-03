import React from "react";
import Post from "./post/post";
import './my-posts.css';

const MyPosts = (props) => {

    const { postsData, inputValue } = props;

    const newMessage = React.createRef();

    const addPost = () => {
        props.onAddPost();
    };

    const changePost = (e) => {
        let text = e.target.value;
        props.onChangePost(text);
    };

    const formPreventDefault = (e) => {
        e.preventDefault();
    };

    return (
        <div className="posts-wrapper">
            <form name="new-post" className="form-default" onSubmit={ formPreventDefault }>
                <label htmlFor="new-post">New post</label>
                <textarea name="new-post"
                          id="new-post"
                          ref={ newMessage }
                          onChange={ changePost }
                          value={ inputValue } />
                <button className="btn purple btn-add-post" onClick={addPost}>
                        Publish
                </button>
            </form>
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

export default MyPosts;