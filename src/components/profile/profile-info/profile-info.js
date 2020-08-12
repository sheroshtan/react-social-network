import React from "react";
import avatar from '../../../images/user-avatar.png';

import './profile-info.css';

const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <div>
                <img src={avatar} alt=""/>
            </div>
            <div>
                Profile Description
            </div>
        </div>
    )
}

export default ProfileInfo;