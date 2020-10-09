import React from "react";
import ProfileStatusWithHooks from "./profileStatusWithHooks";
import {Input} from "../../common/form-controls/form-controls";
import {Field, reduxForm} from "redux-form";

const ProfileDescriptionForm = ({ updateStatus, status, handleSubmit, error }) => {

    return (
        <form className="profile-description profile-description-form" onSubmit={handleSubmit}>
            <div className="profile-description-group">
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className="profile-description-group">
                <span className="profile-term">About Me:</span>
                <Field name='aboutMe'
                       type='text'
                       component={Input} />
            </div>
            <div className="profile-description-group">
                <span className="profile-term">Full name:</span>
                <Field name='fullName'
                       type='text'
                       component={Input} />
            </div>
            <div className="profile-description-group">
                <span className="profile-term">Looking for a job:</span>
                <div className="checkbox-group">
                    <Field name='lookingForAJob' type='checkbox' id='lookingForAJob' component='input'/>
                    <label htmlFor="lookingForAJob"> </label>
                </div>
            </div>
            <div className="profile-description-group">
                <span className="profile-term">Job description:</span>
                <Field name='lookingForAJobDescription'
                       type='text'
                       component={Input} />
            </div>

            <div className="profile-description-group">
                <span className="profile-term">facebook:</span>
                <Field name='contacts.facebook'
                       type='text'
                       component={Input} />
            </div>
            <div className="profile-description-group">
                <span className="profile-term">instagram:</span>
                <Field name='contacts.instagram'
                       type='text'
                       component={Input} />
            </div>
            <div className="profile-description-group">
                <span className="profile-term">twitter:</span>
                <Field name='contacts.twitter'
                       type='text'
                       component={Input} />
            </div>
            <div className="profile-description-group">
                <span className="profile-term">vk:</span>
                <Field name='contacts.vk'
                       type='text'
                       component={Input} />
            </div>
            <div className="profile-description-group">
                <span className="profile-term">github:</span>
                <Field name='contacts.github'
                       type='text'
                       component={Input} />
            </div>
            {
                error && <span className='error-message error-summary'>{ error }</span>
            }
            <button className="btn purple">Save</button>
        </form>
    )
}

const ProfileDescriptionFormRedux = reduxForm({form: 'profileDescription'})(ProfileDescriptionForm);

export default ProfileDescriptionFormRedux;