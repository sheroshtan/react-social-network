import React from "react";
import MyPosts from "../my-posts/my-posts";

import './content-profile.css';

const ContentProfile = () => {
    return (
        <div className="content bg-white">

            <div>
                Avatar + Profile description
            </div>

            <MyPosts />

        </div>
    )
}

export default ContentProfile;