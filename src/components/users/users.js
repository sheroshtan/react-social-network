import React from "react";
import './users.css';
import User from "./user";

const Users = (props) => {
    const users = props.users.map(user => <User key={user.id}
                                                name={user.fullName}
                                                id={user.id}
                                                img={user.imgUrl}
                                                city={user.location.city}
                                                country={user.location.country}
                                                status={user.status}
                                                isFollow={user.isFollow}/>);

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