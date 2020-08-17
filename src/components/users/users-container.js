import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./users";
import {
    changePage,
    follow,
    setTotalUsersCount,
    setUsers,
    toggleLoading,
    unFollow } from "../../redux/users-page-reducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        if(!this.props.users.length) {
            this.props.toggleLoading(!this.props.isLoading);
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                    withCredentials: true
                })
                .then(res => {
                    this.props.setUsers(res.data.items);
                })
                .then(() => this.props.toggleLoading(!this.props.isLoading))
        }
    }

    onChangePage = (page) => {
        this.props.toggleLoading(!this.props.isLoading);
        this.props.changePage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(res => this.props.setUsers(res.data.items))
            .then(() => this.props.toggleLoading(!this.props.isLoading))
    }

    render() {
        return (
            <Users users={this.props.users}
                   isLoading={this.props.isLoading}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onChangePage={this.onChangePage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    changePage,
    setTotalUsersCount,
    toggleLoading
})(UsersContainer);