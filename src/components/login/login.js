import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './login.css';
import {maxLengthCreator, requiredField} from "../../utilities/validators/validators";
import {Input} from "../common/form-controls/form-controls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLength25 = maxLengthCreator(25);

const Login = (props) => {

    const onSubmit = ({email, password, rememberMe}) => {
        props.login(email, password, rememberMe);
    };

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="input-group">
                <Field name='email'
                       placeholder='Email'
                       type='text'
                       component={Input}
                       validate={[requiredField, maxLength25]}/>
            </div>
            <div className="input-group">
                <Field name='password'
                       placeholder='Password'
                       type='password'
                       component={Input}
                       validate={[requiredField, maxLength25]}/>
            </div>
            <div className="checkbox-group">
                <Field name='rememberMe' type='checkbox' id='remember-me' component='input'/>
                <label htmlFor="remember-me">remember me</label>
            </div>
            <div>
                <button className='btn purple'>Login</button>
            </div>
        </form>
    )
}

const LoginFormRedux = reduxForm({form:'login'})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);