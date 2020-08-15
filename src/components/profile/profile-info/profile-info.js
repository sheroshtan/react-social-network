import React from "react";
import avatar from '../../../images/user-avatar.png';
import Preloader from "../../common/preloader/preloader";
import './profile-info.css';


const ProfileInfo = (props) => {
    if(!props.profile) return <Preloader />;

    return (
        <div className="profile-info">
            <div>
                <img src={props.profile.photos.large || avatar} alt=""/>
            </div>
            <div className="profile-description">
                <div className="profile-description-group">
                    <span className="profile-term">About Me:</span>
                    <span>{props.profile.aboutMe || "unknown"}</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">Full name:</span>
                    <span>{props.profile.fullName || "unknown"}</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">Looking for a job:</span>
                    <span>{props.profile.lookingForAJob ? "Yes" : "No"}</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">Job description:</span>
                    <span>{props.profile.lookingForAJobDescription || "unknown"}</span>
                </div>

                <div className="profile-description-group">
                    <span className="profile-term">facebook:</span>
                    <span>{props.profile.contacts.facebook || "unknown"}</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">instagram:</span>
                    <span>{props.profile.contacts.instagram || "unknown"}</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">twitter:</span>
                    <span>{props.profile.contacts.twitter || "unknown"}</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">vk:</span>
                    <span>{props.profile.contacts.vk || "unknown"}</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">github:</span>
                    <span>{props.profile.contacts.github || "unknown"}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;