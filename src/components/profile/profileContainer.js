import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc-helpers/with-auth-redirect";

class ProfileContainer extends React.Component {

    componentDidMount() {

        const { isAuth, getUserProfile, getStatus } = this.props;

        let userId = this.props.match.params.userId;
        if(!userId && isAuth) {
            userId = this.props.userId;
        }
        getUserProfile(userId);
        getStatus(userId);
    }

    render() {
        const { profile, status, updateStatus} = this.props;

        return (
            <div>
                <Profile {...this.props} profile={profile} status={status} updateStatus={updateStatus} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        userId: state.auth.id
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter
)(ProfileContainer);