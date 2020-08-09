import React from "react";

const User = (props) => {
    return (
        <div className="user">
            <div className="user-photo">
                <img src={props.user.imgUrl} alt="user-avatar"/>
                {
                    props.user.isFollowed
                        ? <button className={"btn-follow followed"} onClick={() => props.unFollow(props.user.id)}>Unfollow</button>
                        : <button className={"btn-follow"} onClick={() => props.follow(props.user.id)}>Follow</button>
                }
            </div>
            <div className="user-info">
                <div className="user-showcase">
                    <div className="user-name">{props.user.fullName}</div>
                    <div className='user-location'>{`${props.user.location.city}, ${props.user.location.country}`}</div>
                    <div className="user-status">{props.user.status}</div>
                </div>
            </div>
        </div>
    )
}

export default User;