import {connect} from "react-redux";
import Users from "./users";
import {createFollowtAction,
        createUnfollowtAction} from "../../redux/users-page-reducer";

const mapStateToProps = (state) => {
    return {
        users: [...state.usersPage.users]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: () => dispatch(createFollowtAction()),
        unfollow: () => dispatch(createUnfollowtAction())
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;