import React from "react";

import './post.css';

const Post = (props) => {
    return (
        <div className='post'>

            <img src="https://d2w4qhtqw2dbsq.cloudfront.net/profile_live/4353924/large.jpg" alt="avatar" />

            <p>{ props.message }</p>

        </div>
    )
}

export default Post;