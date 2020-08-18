import React from "react";
import avatar from '../../images/user-avatar.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const User = (props) => {
    return (
        <div className="user">
            <div className="user-photo">
                <NavLink to={`/profile/${props.user.id}`}>
                    <img src={props.user.photos.small ? props.user.photos.small : avatar} alt="user-avatar"/>
                </NavLink>
                {
                    props.user.followed
                        ? <button className={"btn-follow followed"} onClick={() => {
                            axios
                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "92afcfb6-c794-4929-b1c7-95dccc9b3375"
                                    }
                                })
                                .then(res => {
                                    if(res.data.resultCode === 0) {
                                        props.unFollow(props.user.id)
                                    }
                                })
                        }
                        }>Unfollow</button>
                        : <button className={"btn-follow"} onClick={() => {
                            axios
                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "92afcfb6-c794-4929-b1c7-95dccc9b3375"
                                    }
                                })
                                .then(res => {
                                    if(res.data.resultCode === 0) {
                                        props.follow(props.user.id);
                                    }
                                })
                        }
                        }>Follow</button>
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