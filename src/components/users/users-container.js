import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./users";
import {
    changePageAC,
    followAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggle_loadingAC,
    unfollowAC } from "../../redux/users-page-reducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        if(!this.props.users.length) {
            this.props.toggleLoading(!this.props.isLoading);
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
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
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
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

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unFollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        changePage: (page) => dispatch(changePageAC(page)),
        setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count)),
        toggleLoading: (loading) => dispatch(toggle_loadingAC(loading))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);