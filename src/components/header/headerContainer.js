import React from "react";
import Header from "./header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setUserProfile} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(res => {
                const { id, email, login } = res.data.data;
                if(res.data.resultCode === 0) {
                    axios
                        .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                        .then(res => this.props.setUserProfile(res.data))
                        .then(() => this.props.setAuthUserData(id, email, login))
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

export const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.auth.profile
});

export default connect(mapStateToProps, { setAuthUserData, setUserProfile })(HeaderContainer);