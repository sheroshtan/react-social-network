import React from "react";
import avatar from '../../images/user-avatar.png';

const User = (props) => {
    return (
        <div className="user">
            <div className="user-photo">
                <img src={props.user.photos.small ? props.user.photos.small : avatar} alt="user-avatar"/>
                {
                    props.user.isFollowed
                        ? <button className={"btn-follow followed"} onClick={() => props.unFollow(props.user.id)}>Unfollow</button>
                        : <button className={"btn-follow"} onClick={() => props.follow(props.user.id)}>Follow</button>
                }
            </div>
            <div className="user-info">
                <div className="user-showcase">
                    <div className="user-name">{props.user.name}</div>
                    <div className='user-location'>{`${"city placeholder"}, ${"country placeholder"}`}</div>
                    <div className="user-status">{props.user.status}</div>
                </div>
            </div>
        </div>
    )
}

export default User;