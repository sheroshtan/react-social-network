import {connect} from "react-redux";
import Users from "./users";
import {changePageAC, followAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-page-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unFollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        changePage: (page) => dispatch(changePageAC(page)),
        setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;