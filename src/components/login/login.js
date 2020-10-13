import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './login.css';
import {maxLengthCreator, requiredField} from "../../utilities/validators/validators";
import {Input} from "../common/form-controls/form-controls";
import {connect} from "react-redux";
import {getCaptchaUrl, login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const maxLength25 = maxLengthCreator(25);

const Login = (props) => {

    const onSubmit = ({email, password, rememberMe, captchaUrl}) => {
        props.login(email, password, rememberMe, captchaUrl);
    };

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormRedux onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {

    return (
        <form onSubmit={ handleSubmit }>
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
            {
                error && <span className='error-message error-summary'>{ error }</span>
            }
            {
                captchaUrl && <img src={captchaUrl} />
            }
            {
                captchaUrl && <Field name='captcha'
                                     placeholder='captcha'
                                     type='text'
                                     component={Input}
                                     validate={[requiredField, maxLength25]}/>
            }
            <div>
                <button className='btn purple'>Login</button>
            </div>
        </form>
    )
}

const LoginFormRedux = reduxForm({form:'login'})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login, getCaptchaUrl })(Login);