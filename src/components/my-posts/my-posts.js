import React from "react";
import Post from "../post/post";

import './my-posts.css';

const MyPosts = () => {
    return (
        <div className="posts-wrapper">
            <form name="new-post">
                <label htmlFor="new-post">New post</label>
                <textarea name="new-post" id="new-post"></textarea>
                <button className="btn purple btn-add-post">Publish</button>
            </form>
            <div className="posts">
                <span className="title-posts">Recent posts:</span>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;