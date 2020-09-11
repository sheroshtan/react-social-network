import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    logout = () => {
        this.props.logout();
    }

    render() {
        return <Header {...this.props} logout={this.logout} />
    }
}

export const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photos: state.auth.photos
});

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);