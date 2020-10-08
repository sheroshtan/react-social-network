import React from "react";
import MyPostsContainer from "./my-posts/my-posts-container";
import ProfileInfo from "./profile-info/profile-info";
import './profile.css';

const Profile = (props) => {

    const { profile, status, updateStatus, savePhoto, isOwner } = props;

    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         savePhoto={savePhoto}
                         isOwner={isOwner}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;