import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './login.css';

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    };

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
                <Field name='login' placeholder='Login' type='text' component='input'/>
            </div>
            <div className="input-group">
                <Field name='password' placeholder='Password' type='password' component='input'/>
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

export default Login;