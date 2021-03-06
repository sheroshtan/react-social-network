import React from "react";
import {connect} from "react-redux";
import Users from "./users";
import {
    changePage, follow, requestUsers,
    setUsers, toggleFollowing, unFollow
} from "../../redux/usersReducer";
import {
    getCurrentPage, getIsFollowingInProgress, getIsLoading,
    getPageSize, getTotalUsersCount, getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const { getUsers, currentPage, pageSize } = this.props;
        getUsers(currentPage, pageSize);
    }

    onChangePage = (page) => {
        const { changePage, getUsers, pageSize} = this.props;
        changePage(page);
        getUsers(page, pageSize);
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
};

export default connect(mapStateToProps,
    {follow, unFollow, setUsers, changePage, toggleFollowing, getUsers: requestUsers})(UsersContainer);