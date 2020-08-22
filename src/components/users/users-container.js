import React from "react";
import {connect} from "react-redux";
import Users from "./users";
import {
    changePage,
    follow,
    setTotalUsersCount,
    setUsers,
    toggleFollowing,
    toggleLoading,
    unFollow
} from "../../redux/users-page-reducer";
import {UsersApi} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        if(!this.props.users.length) {
            this.props.toggleLoading(!this.props.isLoading);

            UsersApi.getUsers(this.props.currentPage, this.props.pageSize)
                .then(res => {
                    this.props.setUsers(res.items);
                    this.props.toggleLoading(!this.props.isLoading);
                })
        }
    }

    onChangePage = (page) => {
        this.props.toggleLoading(!this.props.isLoading);
        this.props.changePage(page);

        UsersApi.getUsers(page, this.props.pageSize)
            .then(res => {
                this.props.setUsers(res.items);
                this.props.toggleLoading(!this.props.isLoading);
            })
    }

    render() {
        return (
            <Users users={this.props.users}
                   isLoading={this.props.isLoading}
                   isFollowingInProgress={this.props.isFollowingInProgress}
                   toggleFollowing={this.props.toggleFollowing}
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
        isLoading: state.usersPage.isLoading,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    changePage,
    setTotalUsersCount,
    toggleLoading,
    toggleFollowing
})(UsersContainer);