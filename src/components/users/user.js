import React from "react";

const User = (props) => {
    return (
        <div className="user">
            <div className="user-photo">
                <img src={props.img} alt="user-avatar"/>
                <button className={props.isFollow ? "btn-follow followed" : "btn-follow"}>
                    { props.isFollow ? 'Unfollow' : 'Follow' }
                </button>
            </div>
            <div className="user-info">
                <div className="user-showcase">
                    <div className="user-name">{props.name}</div>
                    <div className='user-location'>{`${props.city}, ${props.country}`}</div>
                    <div className="user-status">{props.status}</div>
                </div>
            </div>
        </div>
    )
}

export default User;