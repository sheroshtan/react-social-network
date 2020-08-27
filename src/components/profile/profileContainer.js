import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-page-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc-helpers/with-auth-redirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId || 9797;
        this.props.getUserProfile(userId);
    }

    render() {

        if(!this.props.isAuth) return <Redirect to={'/login'} />

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile });

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);