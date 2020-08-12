import React from "react";
import './users.css';
import User from "./user";
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        if(!this.props.users.length) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}#count=${this.props.pageSize}`)
                .then(res => {
                    this.props.setUsers(res.data.items);
                    return res;
                })
                .then(res => this.props.setTotalUsersCount(res.data.totalCount))
        }
    }

    onChangePage = (page) => {
        this.props.changePage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}#count=${this.props.pageSize}`)
            .then(res => this.props.setUsers(res.data.items))
    }

    render() {
        let pages = [];
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const users = this.props.users.map(user => <User key={user.id}
                                                    user={user}
                                                    follow={this.props.follow}
                                                    unFollow={this.props.unFollow}/>);

        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        const pagesHtml = pages.map(page => {
            return <span key={page}
                         className={this.props.currentPage === page ? 'selected-page' : ''}
                         onClick={() => this.onChangePage(page)}>
                         { page }
                   </span>
        });

        return (
            <div className='users-wrapper'>
                <div>
                    {
                        users
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
}

export default Users;