import React from "react";
import avatar from '../../../images/user-avatar.png';
import Preloader from "../../common/preloader/preloader";
// import ProfileStatus from "./profileStatus";
import './profile-info.css';
import ProfileStatusWithHooks from "./profileStatusWithHooks"; // only for practice with hooks

const ProfileInfo = (props) => {
    if(!props.profile) return <Preloader />;

    const { aboutMe, fullName, lookingForAJob,
        lookingForAJobDescription, contacts, photos } = props.profile;

    const onPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className="profile-info">
            <div className="profile-photo">
                <img src={photos.large || avatar} alt=""/>
                { props.isOwner && <input type='file' onChange={onPhotoSelected}/>}
            </div>
            <div className="profile-description">
                <div className="profile-description-group">
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">About Me:</span>
                    <span>{ aboutMe || "unknown" }</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">Full name:</span>
                    <span>{ fullName || "unknown" }</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">Looking for a job:</span>
                    <span>{ lookingForAJob ? "Yes" : "No" }</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">Job description:</span>
                    <span>{ lookingForAJobDescription || "unknown" }</span>
                </div>

                <div className="profile-description-group">
                    <span className="profile-term">facebook:</span>
                    <span>{ contacts.facebook || "unknown" }</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">instagram:</span>
                    <span>{ contacts.instagram || "unknown" }</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">twitter:</span>
                    <span>{ contacts.twitter || "unknown" }</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">vk:</span>
                    <span>{ contacts.vk || "unknown" }</span>
                </div>
                <div className="profile-description-group">
                    <span className="profile-term">github:</span>
                    <span>{ contacts.github || "unknown" }</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;