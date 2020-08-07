import React from "react";
import MyPostsContainer from "./my-posts/my-posts-container";
import ProfileInfo from "./profile-info/profile-info";
import './profile.css';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;