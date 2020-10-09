import React, {useState} from "react";
import avatar from '../../../images/user-avatar.png';
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHooks from "./profileStatusWithHooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons";
import './profile-info.css';
import ProfileDescriptionForm from "./ProfileDescriptionForm";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) return <Preloader/>;

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            deactivateEditMode();
        })
    }

    return (
        <div className="profile-info">
            <div className="profile-photo">
                <img src={props.profile.photos.large || avatar} alt=""/>
                {props.isOwner && <input type='file' onChange={onPhotoSelected}/>}
            </div>

            {
                editMode
                    ? <ProfileDescriptionForm initialValues={props.profile}
                                              deactivateEditMode={deactivateEditMode}
                                              status={props.status}
                                              isOwner={props.isOwner} onSubmit={onSubmit}
                                              updateStatus={props.updateStatus}/>
                    : <ProfileDescription profile={props.profile}
                                          updateStatus={props.updateStatus}
                                          status={props.status}
                                          isOwner={props.isOwner}
                                          activateEditMode={activateEditMode} />
            }

        </div>
    )
}

const ProfileDescription = ({profile, updateStatus, status, isOwner, activateEditMode}) => {

    const {
        aboutMe, fullName, lookingForAJob,
        lookingForAJobDescription, contacts
    } = profile;

    return (
        <div className="profile-description">
            {isOwner && <FontAwesomeIcon icon={faCog} onClick={activateEditMode}/>}
            <div className="profile-description-group">
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className="profile-description-group">
                <span className="profile-term">About Me:</span>
                <span>{aboutMe || "unknown"}</span>
            </div>
            <div className="profile-description-group">
                <span className="profile-term">Full name:</span>
                <span>{fullName || "unknown"}</span>
            </div>
            <div className="profile-description-group">
                <span className="profile-term">Looking for a job:</span>
                <span>{lookingForAJob ? "Yes" : "No"}</span>
            </div>
            <div className="profile-description-group">
                <span className="profile-term">Job description:</span>
                <span>{lookingForAJobDescription || "unknown"}</span>
            </div>

            <div className="profile-description-group">
                <span className="profile-term">facebook:</span>
                <span>{contacts.facebook || "unknown"}</span>
            </div>
            <div className="profile-description-group">
                <span className="profile-term">instagram:</span>
                <span>{contacts.instagram || "unknown"}</span>
            </div>
            <div className="profile-description-group">
                <span className="profile-term">twitter:</span>
                <span>{contacts.twitter || "unknown"}</span>
            </div>
            <div className="profile-description-group">
                <span className="profile-term">vk:</span>
                <span>{contacts.vk || "unknown"}</span>
            </div>
            <div className="profile-description-group">
                <span className="profile-term">github:</span>
                <span>{contacts.github || "unknown"}</span>
            </div>
        </div>
    )
}

export default ProfileInfo;