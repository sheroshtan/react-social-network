import React from "react";
import MyPosts from "./my-posts/my-posts";
import ProfileInfo from "./profile-info/profile-info";

import './profile.css';


const Profile = (props) => {

    return (
        <div>

            <ProfileInfo />

            <MyPosts postsData={props.postsData}
                     addPost={props.addPost}
                     onChangePostInput={props.onChangePostInput}
                     inputValue={props.inputValue} />

        </div>
    )
}

export default Profile;