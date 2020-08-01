import React from "react";

import './post.css';

const Post = (props) => {
    return (
        <div className='post'>

            <div className="post-content">



                <img src="https://d2w4qhtqw2dbsq.cloudfront.net/profile_live/4353924/large.jpg" alt="avatar" />

                <p>{ props.message }</p>

            </div>

            <div className="rating-group">
                <span className="likes">Likes: {props.likesCount}</span>
            </div>

        </div>
    )
}

export default Post;