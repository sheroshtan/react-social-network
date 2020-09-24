import React from "react";
import avatar from '../../images/user-avatar.png';
import {NavLink} from "react-router-dom";

const User = ({ user, isFollowingInProgress, unFollow, follow  }) => {
    return (
        <div className="user">
            <div className="user-photo">
                <NavLink to={`/profile/${user.id}`}>
                    <img src={ user.photos.small ? user.photos.small : avatar} alt="user-avatar"/>
                </NavLink>
                {
                    user.followed
                        ?   <button disabled={isFollowingInProgress.some((id) => id === user.id)}
                                  className={"btn-follow followed"}
                                  onClick={() => unFollow(user.id)}>
                                Unfollow</button>
                        :   <button disabled={isFollowingInProgress.some((id) => id === user.id)}
                                  className={"btn-follow"}
                                  onClick={() => follow(user.id)}>
                                Follow</button>
                }
            </div>
            <div className="user-info">
                <div className="user-showcase">
                    <div className="user-name">{user.name}</div>
                    <div className="user-status">{user.status}</div>
                </div>
            </div>
        </div>
    )
}

export default User;