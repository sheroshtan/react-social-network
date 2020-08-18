import React from "react";
import './users.css';
import User from "./user";
import Preloader from "../common/preloader/preloader";

const Users = (props) => {
    let pages = [];
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const users = props.users.map(user => <User key={user.id}
                                                user={user}
                                                follow={props.follow}
                                                unFollow={props.unFollow}/>);

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const pagesHtml = pages.map(page => {
        return <span key={page}
                     className={props.currentPage === page ? 'selected-page' : ''}
                     onClick={() => props.onChangePage(page)}>
                         { page }
                   </span>
    });

    return (
        <div className='users-wrapper'>
            <div>
                {
                    props.isLoading ? <Preloader /> : users
                }
            </div>
            <div className="users-pagination">
                {
                    pagesHtml
                }
            </div>
            <div className="btn-showMore-group">
                <button className="btn purple">Show More</button>
            </div>
        </div>
    )
}

export default Users;