import React from "react";
import avatar from '../../images/user-avatar.png';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className="user">
            <div className="user-photo">
                <NavLink to={`/profile/${props.user.id}`}>
                    <img src={props.user.photos.small ? props.user.photos.small : avatar} alt="user-avatar"/>
                </NavLink>
                {
                    props.user.followed
                        ?   <button disabled={props.isFollowingInProgress.some((id) => id === props.user.id)}
                                  className={"btn-follow followed"}
                                  onClick={() => props.unFollow(props.user.id)}>
                                Unfollow</button>
                        :   <button disabled={props.isFollowingInProgress.some((id) => id === props.user.id)}
                                  className={"btn-follow"}
                                  onClick={() => props.follow(props.user.id)}>
                                Follow</button>
                }
            </div>
            <div className="user-info">
                <div className="user-showcase">
                    <div className="user-name">{props.user.name}</div>
                    <div className="user-status">{props.user.status}</div>
                </div>
            </div>
        </div>
    )
}

export default User;