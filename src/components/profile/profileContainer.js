import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus, savePhoto} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc-helpers/with-auth-redirect";

class ProfileContainer extends React.Component {

    refreshProfile() {
        const { isAuth, getUserProfile, getStatus } = this.props;

        let userId = this.props.match.params.userId;
        if(!userId && isAuth) {
            userId = this.props.userId;
        }
        getUserProfile(userId);
        getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        const { profile, status, updateStatus, savePhoto} = this.props;

        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         savePhoto={savePhoto}/>
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
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
    withRouter
)(ProfileContainer);