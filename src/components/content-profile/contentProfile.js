import React from "react";

import './contentProfile.css';

const ContentProfile = () => {
    return (
        <div className="content bg-white">
            <div>
                Avatar + Profile description
            </div>
            <div className="posts-wrapper">
                <h3>My posts</h3>
                <form>
                    <label htmlFor="new-post">New post</label>
                    <textarea name="new-post" id="new-post"></textarea>
                </form>
                <div className="posts">
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentProfile;