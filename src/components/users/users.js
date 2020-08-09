import React from "react";
import './users.css';
import User from "./user";

const Users = (props) => {
    if(!props.users.length) {
        props.setUsers(
            [
                {id: 1, isFollowed: false, fullName: "Maria C.", status: "Lorem ipsum dolor sit amet.", location: { country: "Ukraine", city: "Kharkiv" }, imgUrl: "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_960_720.png"},
                {id: 2, isFollowed: true, fullName: "Terrance W.", status: "Ad, sunt?", location: { country: "Russia", city: "Moscow" }, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpMBCGHK-uHMNtS5WvYh6Sce-xEnJ-hByyuLp_ticRZwqGXg-&s"},
                {id: 3, isFollowed: false, fullName: "Jessica K.", status: "Consequuntur, dolorum eius omnis possimus.", location: { country: "Belarus", city: 'Minsk' }, imgUrl: "https://www.shareicon.net/data/512x512/2016/07/26/802031_user_512x512.png"}
            ]
        );
    }

    const users = props.users.map(user => <User key={user.id}
                                                user={user}
                                                follow={props.follow}
                                                unFollow={props.unFollow}/>);

    return (
        <div className='users-wrapper'>
            <div>
                {
                    users
                }
            </div>
            <div className="btn-showMore-group">
                <button className="btn purple">Show More</button>
            </div>
        </div>
    )
}

export default Users;