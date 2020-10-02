import React from "react";
import './users.css';
import User from "./user";
import Preloader from "../common/preloader/preloader";
import Pagination from "../common/pagination/pagination";

const Users = (props) => {

    const users = props.users.map(user => <User key={user.id} user={user}
                                                follow={props.follow} unFollow={props.unFollow}
                                                toggleFollowing={props.toggleFollowing}
                                                isFollowingInProgress={props.isFollowingInProgress}/>);

    return (
        <div className='users-wrapper'>
            <div>
                {
                    props.isLoading ? <Preloader/> : users
                }
            </div>
            {
                <Pagination totalItemsCount={props.totalUsersCount}
                            onChangePage={props.onChangePage}
                            currentPage={props.currentPage}
                            pageSize={props.pageSize} />
            }
            <div className="btn-showMore-group">
                <button className="btn purple">Show More</button>
            </div>
        </div>
    )
}

export default Users;