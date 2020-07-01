import React from "react";
import MyPosts from "../my-posts/my-posts";
import ProfileInfo from "../profile-info/profile-info";

import './profile.css';


const Profile = () => {

    return (
        <div>

            <ProfileInfo />

            <MyPosts />

        </div>
    )
}

export default Profile;