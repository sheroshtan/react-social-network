import React from 'react';
import './login.css';

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div className="input-group">
                    <input placeholder='Login' type='text'/>
                </div>
                <div className="input-group">
                    <input placeholder='Password' type='password'/>
                </div>
                <div className="checkbox-group">
                    <input type='checkbox' id='remember-me'/>
                    <label htmlFor="remember-me">remember me</label>
                </div>
                <div>
                    <button className='btn purple'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;