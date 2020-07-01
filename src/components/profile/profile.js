import React from "react";
import MyPosts from "../my-posts/my-posts";

import './profile.css';
import ProfileInfo from "../profile-info/profile-info";

const Profile = () => {
    return (
        <div>

            <ProfileInfo />

            <MyPosts />

        </div>
    )
}

export default Profile;