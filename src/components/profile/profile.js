import React from "react";
import MyPostsContainer from "./my-posts/my-posts-container";
import ProfileInfo from "./profile-info/profile-info";
import './profile.css';

const Profile = (props) => {

    const { profile, status, updateStatus } = props;

    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;